import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config();

export const redis = new Redis(process.env.UPSTASH_REDIS_URL, {
  maxRetriesPerRequest: null,
  enableReadyCheck: false,
});

redis.on("connect", () => {
  console.log("Connected to Upstash Redis!");
});

redis.on("error", (err) => {
  console.error("Redis connection error:", err.message);
});

(async () => {
  try {
    await redis.set("foo", "bar");
    const value = await redis.get("foo");
    console.log("Value of foo:", value);
  } catch (error) {
    console.error("Redis operation error:", error.message);
  }
})();
