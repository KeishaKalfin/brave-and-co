import type { APIRoute } from 'astro';
import Stripe from 'stripe';
import { getProductById } from '../../data/products';

export const prerender = false;

export const GET: APIRoute = async ({ request }) => {
  try {
    const secret = import.meta.env.STRIPE_SECRET_KEY || '';
    const stripe = new Stripe(secret);
    const url = new URL(request.url);
    const productId = url.searchParams.get('product');
    const quantity = parseInt(url.searchParams.get('quantity') || '1', 10);

    if (!productId) {
      return new Response('Missing product parameter', { status: 400 });
    }

    const product = getProductById(productId);
    if (!product) {
      return new Response('Product not found', { status: 404 });
    }

    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = product.stripePriceId
      ? [{ price: product.stripePriceId, quantity }]
      : [{
          price_data: {
            currency: 'usd',
            product_data: { name: product.name, images: [url.origin + product.image] },
            unit_amount: Math.round(product.price * 100),
          },
          quantity,
        }];

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${url.origin}/return?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${url.origin}/checkout?cancelled=true`,
      shipping_address_collection: { allowed_countries: ['US', 'CA', 'GB', 'AU'] },
    });

    if (session.url) {
      return Response.redirect(session.url, 303);
    }

    return new Response('Failed to create checkout session', { status: 500 });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return new Response(message, { status: 500 });
  }
};

export const POST: APIRoute = async ({ request, url }) => {
  try {
    const secret = import.meta.env.STRIPE_SECRET_KEY || '';
    const stripe = new Stripe(secret);

    let payload: any = null;
    const contentType = request.headers.get('content-type') || '';
    if (contentType.includes('application/json')) {
      payload = await request.json();
    }

    const items = Array.isArray(payload?.items) ? payload.items : [];
    if (!items.length) {
      return new Response(JSON.stringify({ error: 'No items provided' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = items.map((item: any) => ({
      price_data: {
        currency: 'usd',
        product_data: { name: item.name, images: [url.origin + (item.image || '')] },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: Number(item.quantity) || 1,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${url.origin}/return?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${url.origin}/checkout?cancelled=true`,
      shipping_address_collection: { allowed_countries: ['US', 'CA', 'GB', 'AU'] },
    });

    return new Response(JSON.stringify({ url: session.url }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};