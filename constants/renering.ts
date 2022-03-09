interface RenderPros {
    key: string,
    description: string
}
export const Rendering: RenderPros[] = [
    {
        key: "Static Rendering",
        description: "With static rendering, your pages are generated at build time and then served as static HTML files. This method provides speedy response times because the pages don’t need to be rendered for each request. SEO also works as expected for statically rendered pages because the content is readily available for crawlers. However, statically rendered content can only be updated by deploying a new version of your app. This means that relative to other methods, your content is more likely to become stale between deploys."
    },
    {
        key: "Server-side Rendering",
        description: "With server-side rendering, pages are generated dynamically for each incoming request. This enables content to be updated between deploys (unlike static rendering), and SEO works as expected. However, rendering on every request does add processing time that can noticeably increase response latency."
    },
    {
        key: "Client-side Rendering",
        description: "With client-side rendering (the typical strategy for React apps), the browser requests the app, the page loads, then React requests the data to present to the user. This strategy keeps pages fresh and responsive, but it isn’t compatible with SEO crawlers."
    }
]