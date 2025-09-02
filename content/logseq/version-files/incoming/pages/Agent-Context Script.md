# Agent-Context Script
	- ## Overview
		- **One-line pitch:**
			- Rather robust utility script for personal use (publicly available) which downloads the latest documentation and collates the relevant files from the open-source repo into a set of markdown files, perfect for selective inclusion in context for prompting in a modern AI agent workflow.
		- **Tech stack:**
			- Python
	- v1
		- **Problem** → pain point in one or two sentences.
			- Working with new technologies, I found consumer-facing AI to be unreliable, hard to steer, and could be brilliant at times, but it was inconsistent.
		- **Solution** → what you built, how you approached it.
			- What has worked for me is bringing the source of truth to the AI directly; I only need to make sure the documentation is appropriate (accurate, up to date), then the AI will perform brilliantly and even refer to the documentation directly.
			- I wrote a script to download, optimize, include, exclude, and package documentation into .md files.
		- **Outcome** → measurable impact or benefit.
			- Using this script I can carefully prepare large swaths of documentation and provide it to the AI assistant in its preferred format; then I have a pair programmer that is brilliant, accurate, and will reference the documentation directly.
			- This has enabled me to quickly learn various systems in software development; while building my [[Agent Dashboard]] the Python, fast-agent, Textual flowed like water into the background which leaves me available to focus on the user experience and the design principles which give me confidence as a systems architect.
		- **Insight** → what you learned or why your approach matters.
			- Standard AI models are plenty capable when we engineer the context, though it requires a geeky workflow like mine.
			- Long-context windows are vitally important; in early 2025 I used Google's Gemini model with a 1 million token context window, but now the other model providers are starting to support longer contexts.
	- v2
		- Agent-Context Script
			- **Problem** → pain point in one or two sentences.
				- Frontier models in 2025 are unreliable and hard to steer
					- non-starter for using in a workflow or in a product, not yet professional grade
				- but sometimes brilliant
				- this is difficult, because, personally, I need them to be my ideal tutor and they are sooo close
			- **Solution** → what you built, how you approached it.
				- I've found that models can be reliable, even self-accountable
					- if you directly bring them the source of truth
					- by passing as input the documentation, source code, or information that they need; all I need to do is provide said documentation, then I have an oracle of my given subject, software package, etc.
				- This is easier said than done; I've engineered a custom script to download, optimize, package, and selectively include, exclude documentation into neat .md file packages.
			- **Outcome** → measurable impact or benefit.
				- this project demonstrates that I can
					- break down complex problems, transform them into something able to be automated
					- reliably solve whatever problem comes into my path
			- **Insight** → what you learned or why your approach matters.
				- Massive capacity context windows are vitally important, with Gemini's 1 million token context window I have personally experienced the AI providing insight which is gleaned from deep within the documentation, in an area I hadn't even considered, and actually providing references to the documentation to back up its claims
				- instead of hoping that an AI will use Google, or ctrl+f a textbook like a human would, if we do the slight work of bringing them the source of truth directly, they can precisely cite concepts, synthesise from data you didn't know you were feeding it and so on
	- Gemini marketing rewrite:
		- # Context-Aware AI Engine
			- ## Overview
				- An automated pipeline engineered to transform sprawling documentation into a curated 'source of truth', creating hyper-accurate, context-aware AI assistants.
				  Python · Data Scraping · LLM Context Engineering
				  [View sample output on GitHub](https://github.com/Ethan23p/your-repo-link)
			- ## Problem
				- For professionals, frontier AI models are a paradox: occasionally brilliant, yet too inconsistent and difficult to steer for mission-critical work. Without a deep understanding of proprietary systems or specific project documentation, they can't be trusted, making them unsuitable for professional-grade workflows.
			- ## Solution
				- I engineered a system that makes AI reliable and even accountable. It works by creating a bespoke "source of truth" for any subject. A custom data pipeline automatically downloads, optimizes, and packages vast amounts of documentation, source code, or other information into a clean, structured format that I provide directly to the AI in its context window. This transforms a generic model into a focused oracle on any given topic.
			- ## Outcome
				- This project demonstrates the value I provide to my clients; by implementing a similar context-engineering pipeline, a business can:
				  **Create Subject-Matter Experts**: Transform a generalist AI into a specialist with deep knowledge of your internal tools, APIs, and codebases.
				  **Drastically Increase Reliability & Trust**: Generate AI-driven insights and code that are consistently accurate, as the model is grounded in your approved documentation.
				  **Accelerate Development & Onboarding**: Provide developers with an AI pair programmer that can answer complex questions with verifiable answers, complete with direct references to the source material.
			- ## Insight
				- The key to unlocking professional-grade AI is not waiting for a better model, but mastering the art of context engineering.
				  By providing a curated 'source of truth' directly to the AI, we shift it from a creative-but-unreliable partner to a precise and accountable tool.
				  This approach ensures that as AI context windows grow, the quality and depth of insight will grow right along with them.
	- v3
	  collapsed:: true
		- Agent-Context Script
			- **Overview**
				- one sentence pitch:
				- [View the code on GitHub](https://github.com/Ethan23p/agent-context-script)
			- **Problem** → pain point in one or two sentences.
				- Frontier AI models (in late 2025) are not suitable for use in a professional context, typically; while they can occasionally be brilliant they are consistently unreliable and difficult to steer. Even so, the potential of these systems if they could understand proprietary systems or specific project documentation is massive.
			- **Solution** → what you built, how you approached it.
				- I crafted a system which makes an AI assistant reliable and even accountable by generating a bespoke "source of truth" for a given subject which I can provide the AI to directly reference & synthesize information from.
				- The source of truth comes from the documentation, source code, and other text-based sources which have to be downloaded, optimized, and packaged; then, taking advantage of the massive context window of Gemini, the AI accepts as input both the source of truth, my query and is able to precisely cite the documentation.
			- **Outcome** → measurable impact or benefit.
				- This project demonstrates the value I provide to my clients; by implementing a similar context-engineering pipeline, a business can:
					- **Create Subject-Matter Experts**: Transform a generalist AI into a specialist with deep knowledge of your internal tools, APIs, and codebases.
					- **Drastically Increase Reliability & Trust**: Generate AI-driven insights and code that are consistently accurate, as the model is grounded in your approved documentation.
					- **Accelerate Development & Onboarding**: Provide developers with an AI pair programmer that can answer complex questions with verifiable answers, complete with direct references to the source material.
			- **Insight** → what you learned or why your approach matters.
				- Creating a "source of truth" based on the documentation, source code of a technical system means one can bring the data to the AI directly so  it can focus its intelligence there and provide guidance, synthesis, and cite it's answers.
				- Large context windows are key to aligning AI with specific context and creating reliability.
	- template
		- **Problem** → pain point in one or two sentences.
		- **Solution** → what you built, how you approached it.
		- **Outcome** → measurable impact or benefit.
		- **Insight** → what you learned or why your approach matters.