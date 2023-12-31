'use client'
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import {Button} from '@nextui-org/button'; 
import { useEffect } from 'react'
import { useState } from 'react'
import {Image} from "@nextui-org/react";


export default function Home() {

	const [theme, setTheme] = useState('light'); // valor predeterminado

useEffect(() => {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  setTheme(mediaQuery.matches ? 'dark' : 'light');
}, []);

		useEffect(() => {
			const htmlElement = document.querySelector('html');
			if (htmlElement) {
				if (theme === "dark") {
					htmlElement.classList.add('dark');
				} else {
					htmlElement.classList.remove('dark');
				}
			}
		}, [theme]);
		
		  
		
	return (

	
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title()}>Ni </h1>
				<h1 className={title({ color: "violet" })}>Verga&nbsp;</h1>
				<br />
				<h1 className={title()}>
					websites regardless of your design experience.
				</h1>
				<h2 className={subtitle({ class: "mt-4" })}>
					Beautiful, fast and modern React UI library.
				</h2>
			</div>

			<div>

    </div>


			<div className="flex gap-3">
				<Link
					isExternal
					href={siteConfig.links.docs}
					className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
				>
					Documentation
				</Link>
				<Link
					isExternal
					className={buttonStyles({ variant: "bordered", radius: "full" })}
					href={siteConfig.links.github}
				>
					<GithubIcon size={20} />
					GitHub
				</Link>
			</div>

			<div className="mt-8">
				<Snippet hideSymbol hideCopyButton variant="flat">
					<span>
						Get started by editing <Code color="primary">app/page.tsx</Code>
					</span>
				</Snippet>
			</div>
		</section>

	);
}
