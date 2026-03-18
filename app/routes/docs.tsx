import type { Route } from "./+types/docs";
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Documentation - Starliner" },
    { name: "description", content: "Starliner documentation and guides" },
  ];
}

export default function Docs() {
  return (
      <main className="py-14 pb-20">
        <Link to="/"
              className="inline-flex items-center gap-2 text-tx2 text-[0.85rem] no-underline hover:text-tx transition-colors mb-6">
          <ArrowLeft className="w-4 h-4"/> <span>back</span>
        </Link>
        <div className="border-l-[3px] pl-4 mb-6">
          <h2 className="text-[0.9rem] font-bold text-tx">Documentation</h2>
        </div>

        <p className="mb-8 text-tx text-[0.88rem] max-w-[820px]">
          Everything you need to know to quickly configure and deploy your application.
        </p>

        <section id="tutorial" className="pt-8 border-t border-border">
          <div className="border-l-[3px] pl-4 mb-6">
            <h2 className="text-[0.9rem] font-bold text-tx">Join the Starliner Organization</h2>
          </div>
        </section>

        <div className="mb-10">
          <p className="text-tx2 text-[0.85rem] mb-4">To make use of our server, join the starliner organization. If you aren't logged in it will prompt you to do so or register first.</p>
          <a href="https://starliner.app/organizations/invite/ac658845-5add-46f7-9c69-1cffd13c3411"
             className="inline-block bg-violet-10 py-[0.25rem] px-4 text-white rounded text-[0.85rem] font-semibold no-underline hover:opacity-90 transition-opacity">
            Join Starliner →
          </a>
        </div>

        <section id="tutorial" className="pt-8 border-t border-border">
          <div className="border-l-[3px] pl-4 mb-6">
            <h2 className="text-[0.9rem] font-bold text-tx">Create or Join a Team</h2>
          </div>
        </section>

        <div className="mb-10">
          <p className="text-tx2 text-[0.85rem] mb-4">After joining the starliner organization, you first need to create
            a team in order to setup your project. When creating a team, a slug is generated which your team members can
            use to join.</p>
          <img src="/docs/team-settings.png" alt="Team Settings" className="rounded border border-border w-full"/>
        </div>

        <section id="tutorial" className="pt-8 border-t border-border">
          <div className="border-l-[3px] pl-4 mb-6">
            <h2 className="text-[0.9rem] font-bold text-tx">Create a Project</h2>
          </div>
        </section>

        <div className="mb-10">
          <p className="text-tx2 text-[0.85rem] mb-4">After creating a team, you can setup a project. When creating the
            project, choose a name and select your team. The Starliner Cluster to which you will deploy your application
            is automatically provided to you.</p>
          <img src="/docs/create-project.png" alt="Create Project" className="rounded border border-border w-full"/>
        </div>

        <section id="tutorial" className="pt-8 border-t border-border">
          <div className="border-l-[3px] pl-4 mb-6">
            <h2 className="text-[0.9rem] font-bold text-tx">Deploy a Full-Stack App</h2>
          </div>
          <p className="mb-8 text-tx2 text-[0.88rem]">
            Follow this step-by-step guide to deploy a complete application with frontend, backend, database, and
            ingress.
          </p>

          {/* Step 1 */}
          <div className="mb-10">
            <h3 className="text-[0.88rem] font-semibold text-tx mb-2">1. Add a Database</h3>
            <p className="text-tx2 text-[0.85rem] mb-4">After creating a project, you can easily add a database
              through the UI. Simply provide the service name to get started.</p>
            <img src="/docs/step-01.png" alt="Add Database" className="rounded border border-border w-full"/>
          </div>

          {/* Step 2 */}
          <div className="mb-10">
            <p className="text-tx2 text-[0.85rem] mb-4">After a moment, the database will be deployed. The health
              status is displayed in the component, along with all the necessary connection details: username,
              password, database name, and internal endpoint. This is a PostgreSQL database.</p>
            <img src="/docs/step-05.png" alt="Database Deployed" className="rounded border border-border w-full"/>
          </div>

          {/* Step 3 */}
          <div className="mb-10">
            <h3 className="text-[0.88rem] font-semibold text-tx mb-2">2. Add Backend Service</h3>
            <p className="text-tx2 text-[0.85rem] mb-4">Deploy your backend by providing the GitHub repository link,
              project directory, and the path to the Dockerfile. Specify the port where you want the service to run
              and add any necessary environment variables. Click deploy and watch the magic happen.</p>
            <img src="/docs/step-06.png" alt="Add Backend Service" className="rounded border border-border w-full"/>
          </div>

          {/* Step 4 */}
          <div className="mb-10">
            <p className="text-tx2 text-[0.85rem] mb-4">After a moment, the image is built and deployed. The health
              check indicator confirms your service is running.</p>
            <img src="/docs/step-08.png" alt="Backend Deployed" className="rounded border border-border w-full"/>
          </div>

          {/* Step 5 */}
          <div className="mb-10">
            <h3 className="text-[0.88rem] font-semibold text-tx mb-2">3. Add Frontend Service</h3>
            <p className="text-tx2 text-[0.85rem] mb-4">Add your frontend application by connecting to the same or a
              different repository. Provide the path to the directory and Dockerfile, specify the port, and add any
              required environment variables.</p>
            <img src="/docs/step-09.png" alt="Add Frontend Service" className="rounded border border-border w-full"/>
          </div>

          {/* Step 6 */}
          <div className="mb-10">
            <p className="text-tx2 text-[0.85rem] mb-4">The frontend node is added in the canvas. See health check.</p>
            <img src="/docs/step-11.png" alt="Link Services" className="rounded border border-border w-full"/>
          </div>

          {/* Step 7 */}
          <div className="mb-10">
            <h3 className="text-[0.88rem] font-semibold text-tx mb-2">4. Configure Ingress</h3>
            <p className="text-tx2 text-[0.85rem] mb-4">Set up ingress rules to expose your application. Specify the
              host, path, and path type (prefix or exact), then select the target service. Ingress maps a path from
              your chosen service to the configured route. Click deploy to create the ingress.</p>
            <img src="/docs/step-13.png" alt="Configure Ingress" className="rounded border border-border w-full"/>
          </div>

          {/* Step 8 */}
          <div className="mb-10">
            <p className="text-tx2 text-[0.85rem] mb-4">Review all services, connections and ingresses in the
              canvas.</p>
            <img src="/docs/step-14.png" alt="Review Configuration" className="rounded border border-border w-full"/>
          </div>

          {/* Step 9 */}
          <div className="mb-10">
            <h3 className="text-[0.88rem] font-semibold text-tx mb-2">5. Access Your Application</h3>
            <p className="text-tx2 text-[0.85rem] mb-4">Copy the ingress link and open it in your browser to see your
              application running in the cloud.</p>
            <img src="/docs/step-18.png" alt="Access Application" className="rounded border border-border w-full"/>
          </div>

          {/* Step 10 */}
          <div className="mb-10">
            <p className="text-tx2 text-[0.85rem] mb-4">Your application is up and running. Enjoy!</p>
            <img src="/docs/step-17.png" alt="Application Running" className="rounded border border-border w-full"/>
          </div>
        </section>

        <div className="mt-16 p-6 sm:p-10 border border-border rounded">
          <div className="border-l-[3px] pl-4 mb-6">
            <h2 className="text-[0.9rem] font-bold text-tx">Need help?</h2>
          </div>
          <p className="text-tx2 max-w-[600px] mb-5 text-[0.88rem]">
            Can't find what you're looking for? Reach out to the team or check the community resources.
          </p>
          <div className="flex gap-4 items-center flex-wrap">
            <a href="mailto:mail@starliner.dev"
               className="bg-violet-10 py-[0.25rem] cursor-pointer px-4 text-white rounded text-[0.85rem] font-semibold no-underline hover:opacity-90 transition-opacity">Contact
              support</a>
            <a href="https://github.com/starlinerapp/starliner" target="_blank"
               className="cursor-pointer text-[0.85rem] no-underline hover:underline">GitHub Discussions →</a>
          </div>
        </div>
      </main>
  );
}
