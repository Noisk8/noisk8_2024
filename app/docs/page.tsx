import { title } from "@/components/primitives";
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function DocsPage() {
	return (
		<div>
			<h1 className={title()}>Docs</h1>
			<SpeedInsights/>
		</div>
	);
}
