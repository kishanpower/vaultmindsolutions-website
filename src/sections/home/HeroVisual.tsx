import {
  BrainCircuit,
  ShieldCheck,
  Cloud,
  Database,
} from "lucide-react";

export default function HeroVisual() {
  return (
    <div className="hidden lg:block">
      <div
        className="
          rounded-3xl
          border
          border-slate-200
          bg-white
          p-8
          shadow-2xl
        "
      >
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold">
              VaultMind Dashboard
            </h3>

            <p className="text-slate-500">
              Enterprise Technology Platform
            </p>
          </div>

          <div className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
            Online
          </div>
        </div>

        <div className="space-y-4">

          <div className="flex items-center justify-between rounded-2xl border p-4">
            <div className="flex items-center gap-3">
              <BrainCircuit className="text-blue-600" />
              <span>AI Solutions</span>
            </div>

            <span className="text-green-600">
              Active
            </span>
          </div>

          <div className="flex items-center justify-between rounded-2xl border p-4">
            <div className="flex items-center gap-3">
              <Cloud className="text-cyan-600" />
              <span>Cloud Infrastructure</span>
            </div>

            <span className="text-green-600">
              Active
            </span>
          </div>

          <div className="flex items-center justify-between rounded-2xl border p-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-blue-600" />
              <span>Cyber Security</span>
            </div>

            <span className="text-green-600">
              Active
            </span>
          </div>

          <div className="flex items-center justify-between rounded-2xl border p-4">
            <div className="flex items-center gap-3">
              <Database className="text-indigo-600" />
              <span>Enterprise Systems</span>
            </div>

            <span className="text-green-600">
              Active
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
