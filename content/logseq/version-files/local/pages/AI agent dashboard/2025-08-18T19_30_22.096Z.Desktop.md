tags:: portfolio,

- ## Overview
	- A lightweight, flexible testbed for building and experimenting with AI agents. Features a scrollable conversation history with multiple conversation threads.
- ## My Role
	- Designed and implemented the core Python code. Integrated the `fast-agent` library for agent creation and deployment, and built a terminal UI using Textual for smooth interaction.
- ## Tech Stack
	- Python · fast-agent · LLM APIs · Textual (Terminal UI)
- ## Problem
	- AI tools are either consumer-facing (easy to use but limited) or code-based (powerful but cumbersome). I wanted something in between: flexible enough for developers but accessible enough for daily workflows.
- ## Solution
	- Built a terminal dashboard that cleanly separates concerns (Agent / Model / View architecture), enforces robustness through encapsulation, and keeps abstractions simple with a handful of discrete objects (App, User, Interaction, Session).
- ## Outcome
	- A reliable harness for experimenting with agents and workflows, making development faster and debugging easier. Provides a solid foundation for custom AI-powered systems.
- ## Key Insights
	- Elegant separation of concerns makes the app easy to extend.
	- Robust encapsulation minimizes bugs.
	- Clear object model simplifies troubleshooting and collaboration.