import { register } from "@/metrics";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const metrics = await register.metrics();
    return new Response(metrics, {
      headers: {
        "Content-Type": register.contentType,
      },
    });
  } catch (error) {
    console.error("Error generating metrics:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}