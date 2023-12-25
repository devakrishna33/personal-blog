export default function Page(): JSX.Element {
    return (
        <div className="px-6 py-12 md:px-48">
            <h1 className="text-4xl font-bold">
                Cutting Costs in Vercel Deployments
            </h1>
            <p className="mt-4">
                <strong>TLDR:</strong> Don't move out of Vercel just because of
                bandwidth costs. It's too good of a platform to move out of.
            </p>
            <p className="mt-4">
                <strong>PS:</strong> This app is deployed on Vercel using the
                methods described.
            </p>

            <p className="mt-4">
                Vercel is a great platform for deploying Next.js apps. It
                provides a lot of features out of the box, like serverless
                functions, automatic deployments, and more. However, it can get
                expensive if you have a lot of traffic and/or host static assets
                because of the way it charges for bandwidth.
            </p>
            <p className="mt-4">
                For a long time whenever someone mentions Vercel, the first
                thing that comes to mind is the{" "}
                <a
                    href="https://vercel.com/docs/platform/limits#bandwidth"
                    target="_blank"
                    rel="noreferrer"
                >
                    bandwidth limit
                </a>{" "}
                and how expensive it can get. Vercel charges $40/100GB of
                bandwidth. This is a lot compared to other cloud providers like
                AWS, Azure, and GCP. Note that the bandwidth charges even in
                these cloud providers are not cheap, but they are still cheaper
                than Vercel.{" "}
                <a
                    href="https://blog.cloudflare.com/aws-egregious-egress"
                    className="text-blue-500 no-underline hover:underline"
                >
                    Check out this blog post by Cloudflare on AWS’s Egregious
                    Egress
                </a>
            </p>
            <p className="mt-4">
                I have been a fan of Cloudflare's CDN for a long time because of
                their zero egress. Why not use Cloudflare to serve static assets
                and save on bandwidth costs? I did that it reduced the bandwidth
                costs by 90%. But I had to move all my images to Cloudflare's R2
                storage.
            </p>

            <p className="mt-4">
                What to do about the remaining 10%? What if I don't want to move
                my images to Cloudflare's R2? Simple solution is to proxy the
                requests to Vercel from Cloudflare. This will cache and server
                the responses in Cloudflare's CDN. This will drastically reduce
                the bandwidth costs. Is it enough? Probably for most cases.
            </p>

            <p className="mt-4">
                By default Cloudflare caches the responses for non-html files.
                You can configure it to cache the html files as well if you're
                not using SSR.
            </p>

            <p className="mt-4">
                Even after doing this I saw that the bandwidth usage was still
                present in Vercel. After some digging I found that Cloudflare
                was still making requests to Vercel for the static assets if the
                cache was expired. If your website has a lot of traffic, this
                won't be a problem. If it doesn't, you can use Cloudflare's{" "}
                Cache Reserves to cache the static assets for a longer period of
                time, at 0 bandwidth costs. Read more about it{" "}
                <a
                    href="https://developers.cloudflare.com/cache/advanced-configuration/cache-reserve/"
                    className="text-blue-500 no-underline hover:underline"
                >
                    here
                </a>
            </p>

            <p className="mt-4">
                I have been using this setup for a while now and it has been
                working great. I have been able to reduce the bandwidth costs by
                99%.
            </p>

            <p className="mt-4">
                Follow me on{" "}
                <a
                    href="https://twitter.com/random_geek1"
                    className="text-blue-500 no-underline hover:underline"
                >
                    Twitter
                </a>{" "}
                for more.
            </p>
        </div>
    );
}
