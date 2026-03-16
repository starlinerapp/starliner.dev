import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Starliner" },
    { name: "description", content: "Open Source DevOps Platform for Engineering Teams" },
  ];
}

export default function Home() {
  return <div className="text-tx font-mono text-sm leading-relaxed antialiased">
    <div className="max-w-[900px] mx-auto px-8">

      <nav className="flex gap-3 items-center py-5 top-0 z-50">
        <img src="/logo.png" alt="Starliner" className="h-8 w-8 shrink-0 rounded-md" />
        <a  className="flex items-center gap-2 font-bold text-[1rem] no-underline mr-6 shrink-0">
          Starliner
        </a>

        <div className="flex items-center ml-auto shrink-0">
          <a href="https://starliner.app" target="_blank" className="text-tx text-[0.9rem] no-underline hover:text-blue-10 transition-colors">Get started</a>
          <span className="text-border px-3 select-none">|</span>
          <a href="mailto:mail@starliner.dev" className="bg-violet-10 text-white cursor-pointer py-[0.25rem] rounded px-4 text-[0.9rem] font-semibold no-underline hover:opacity-90 transition-opacity">Get in touch</a>
        </div>
      </nav>

      <main className="py-14 pb-20">
        <div className="border-l-[3px] pl-4 mb-6">
          <h2 className="text-[0.9rem] font-bold text-tx">The open source DevOps platform for engineering teams</h2>
        </div>

        <p className="mb-5 text-tx text-[0.88rem] max-w-[820px]">
          Starliner gives your team the simplicity of modern PaaS solutions while running entirely on <a className="text-blue-10 no-underline">your
          own infrastructure</a>. Transform any cloud or bare metal into a full Platform as a Service, with security
          and compliance enforced by default.
        </p>

        <p className="mb-5 text-tx text-[0.88rem] max-w-[820px]">
          Starliner is built for engineering teams that need the <a  className="text-blue-10 no-underline">speed
          of modern PaaS</a> and the <a  className="text-blue-10 no-underline">auditability</a> of
          enterprise infrastructure, without choosing between the two.
        </p>

        <section id="platform" className="pt-12 border-t border-border">
          <div className="border-l-[3px] pl-4 mb-6">
            <h2 className="text-[0.9rem] font-bold text-tx">Why Starliner</h2>
          </div>

          <p className="mb-5 text-[0.88rem] max-w-[820px]">
            Over the past decade, the expectations placed on software developers have expanded significantly. Beyond
            writing application code, developers are increasingly expected to manage infrastructure, deployment
            pipelines, and operational concerns.
          </p>
          <p className="mb-5 text-[0.88rem] max-w-[820px]">
            Most teams end up in one of two traps. Either a <strong className="font-bold text-tx">centralised DevOps
            team</strong> that becomes a bottleneck as the organisation grows, or a <strong
              className="font-bold text-tx">fully distributed model</strong> where engineers copy configuration files
            they don't fully understand, accumulating operational debt that never gets paid down.
          </p>
          <p className="mb-0 text-[0.88rem] max-w-[820px]">
            Starliner is the third path. It standardizes infrastructure patterns and deployment workflows so developers
            can ship independently, without every engineer needing to become an infrastructure specialist.
          </p>
        </section>


        <section id="features" className="pt-12 border-t border-border mt-12">
          <div className="border-l-[3px] pl-4 mb-6">
            <h2 className="text-[0.9rem] font-bold text-tx">Platform features</h2>
          </div>

          <ul className="list-none mb-6">
            <li className="flex gap-4 items-start py-[0.6rem] border-b border-border text-[0.88rem]">
              <span className="shrink-0">*</span>
              <span className="text-tx font-semibold min-w-[220px]">Digital Sovereignty</span>
              <span className="text-tx2">Deploy to your preferred public cloud, your own bare metal, or Starliner's managed offering. Kubernetes under the hood means zero vendor lock-in. Regulated environments can enforce data residency from day one.</span>
            </li>
            <li className="flex gap-4 items-start py-[0.6rem] border-b border-border text-[0.88rem]">
              <span className="shrink-0">*</span>
              <span className="text-tx font-semibold min-w-[220px]">Environment Management</span>
              <span className="text-tx2">Every pull request gets an isolated Preview environment automatically. Merge to deploy to Staging. Promote to Production after QA. Environments can also be cloned for AI agent workloads against realistic datasets.</span>
            </li>
            <li className="flex gap-4 items-start py-[0.6rem] border-b border-border text-[0.88rem]">
              <span className="shrink-0">*</span>
              <span className="text-tx font-semibold min-w-[220px]">Deployment Strategies</span>
              <span className="text-tx2">Rolling updates, canary releases, blue-green deployments, and feature flags — all available out of the box.</span>
            </li>
            <li className="flex gap-4 items-start py-[0.6rem] border-b border-border text-[0.88rem]">
              <span className="shrink-0">*</span>
              <span className="text-tx font-semibold min-w-[220px]">Built-in Observability</span>
              <span className="text-tx2">Hardware metrics, system telemetry, alerting, and extensible custom application metrics — all configured automatically.</span>
            </li>
            <li className="flex gap-4 items-start py-[0.6rem] border-b border-border text-[0.88rem]">
              <span className="shrink-0">*</span>
              <span className="text-tx font-semibold min-w-[220px]">Compliance by Default</span>
              <span className="text-tx2">Every deployment follows the same hardened security baseline aligned with HIPAA, SOC 2, and ISO 27001. Compliance is enforced at the platform level.</span>
            </li>
            <li className="flex gap-4 items-start py-[0.6rem] text-[0.88rem]">
              <span className="shrink-0">*</span>
              <span className="text-tx font-semibold min-w-[220px]">Internal Developer Platform</span>
              <span className="text-tx2">Organisations can customise golden paths, security baselines, and deployment workflows to match their own policies and operational requirements.</span>
            </li>
          </ul>
        </section>

        <div className="mt-16 p-10 border border-border rounded">
          <div className="border-l-[3px] pl-4 mb-6">
            <h2 className="text-[0.9rem] font-bold text-tx">Get started with Starliner</h2>
          </div>
          <p className="text-tx2 max-w-[600px] mb-5 text-[0.88rem]">
            Open source and self-hosted. Deploy on the infrastructure that fits your requirements — public cloud,
            private cloud, or bare metal. Get in touch to discuss your use case.
          </p>
          <div className="flex gap-4 items-center flex-wrap">
            <a href="mailto:mail@starliner.dev"
               className="bg-violet-10 py-[0.25rem] cursor-pointer px-4 text-white rounded text-[0.85rem] font-semibold no-underline hover:opacity-90 transition-opacity">Get in touch</a>
            <a href="https://github.com/starlinerapp/starliner" target="_blank" className="cursor-pointer text-[0.85rem] no-underline hover:underline">View on GitHub →</a>
          </div>
        </div>

      </main>

      <footer
          className="border-t border-border py-6 flex justify-between items-center text-[0.78rem] text-tx3 flex-wrap gap-2">
        <span>© 2026 Starliner. All rights reserved.</span>
      </footer>
    </div>
  </div>
}
