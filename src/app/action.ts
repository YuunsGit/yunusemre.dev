"use server";

import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env["UPSTASH_REDIS_REST_URL"],
  token: process.env["UPSTASH_REDIS_REST_TOKEN"],
});

export default async function increasePokeCounter() {
  return await redis.incr("pokeCounter");
}
