# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [0.6.0](https://github.com/fractabase/company-profile/compare/v0.5.0...v0.6.0) (2026-09-26)


### Features

* **500-page:** add custom 500 error page with styling and reload functionality ([56cc411](https://github.com/fractabase/company-profile/commit/56cc41103265be040b88bf18d2212dfb851c8be5))
* **App:** restructure App component to include routing logic and offline notice ([81fc3db](https://github.com/fractabase/company-profile/commit/81fc3db248acec776f65db9acb396b9c540f4bf1))
* **contact-form:** add network error handling and user feedback in ContactSection ([160da74](https://github.com/fractabase/company-profile/commit/160da744ff89907403e7f5fc8f5ada8f4efe31d5))
* **error-handling:** add comprehensive error handling system ([c554733](https://github.com/fractabase/company-profile/commit/c554733f2bda0c65067b39913a945936bcc7c145))
* **error-handling:** wrap routes in ErrorBoundary and add 500 error page route ([af854ff](https://github.com/fractabase/company-profile/commit/af854ff6eb464305103e29a360ac7c82bd9ec5e6))
* **ErrorBoundary:** implement ErrorBoundary component with fallback UI and reload functionality ([6bb56db](https://github.com/fractabase/company-profile/commit/6bb56dbb4132d3b99a0ab1440d482d8d27f105ad))
* **icons:** add ArrowLeft and Home icons to Icons component ([3b5858c](https://github.com/fractabase/company-profile/commit/3b5858c57a7916150491739195615624945ae785))
* **icons:** add RefreshCw and AlertTriangle icons with custom SVG paths ([c548f25](https://github.com/fractabase/company-profile/commit/c548f250ba8c8db2be0dcd44062f9179fa4f437f))
* **not-found:** create NotFoundSection component with animated 404 display and navigation options ([87968d9](https://github.com/fractabase/company-profile/commit/87968d9a2a18ac00cd584141849dda89dab952e2))
* **not-found:** implement NotFound page with scroll reset and footer visibility control ([066042d](https://github.com/fractabase/company-profile/commit/066042d90fa808a95d410fd74b299cb6c6ad1a25))
* **offline-notice:** add OfflineNotice component with online/offline status indicator ([e578170](https://github.com/fractabase/company-profile/commit/e57817052fbed7db94d8fa701acef42a25a8dee7))
* **online-status:** add useOnlineStatus hook to track browser online/offline status ([d702cc7](https://github.com/fractabase/company-profile/commit/d702cc7c4bd38db575e556d58aef6a1877b6c659))
* **particle-network:** implement useParticleNetwork hook for dynamic particle animation on canvas ([4e507a3](https://github.com/fractabase/company-profile/commit/4e507a300c8e31179ea9b136683cf3df2e3b7d2c))
* **server-error:** add ServerErrorSection component with animations and reload functionality ([4afec84](https://github.com/fractabase/company-profile/commit/4afec84ac2ab316f3bea8570c76e73803a42790b))
* **server-error:** create ServerError page to handle 500 errors with appropriate UI ([cd5f7b4](https://github.com/fractabase/company-profile/commit/cd5f7b4f082e02f0e28789e1b62011852128d441))
* **styles:** add particle color variables and define content enter animation ([c93f7e4](https://github.com/fractabase/company-profile/commit/c93f7e4b5893739c26c8b4cfad1f60fad9631064))
* **under-maintenance:** add UnderMaintenance page with scroll-to-top effect ([9260a3b](https://github.com/fractabase/company-profile/commit/9260a3bc369f19b7938f8c6dc1b381cef93edc65))
* **under-maintenance:** create UnderMaintenanceSection with particle background and status message ([139a7bd](https://github.com/fractabase/company-profile/commit/139a7bd3930b75ca35f28ae811fca360577398c6))


### Refactoring

* **footer:** update footer visibility based on data-hide-footer attribute ([cc95648](https://github.com/fractabase/company-profile/commit/cc95648e33c4557c58df3d30236ecbf8fd28e5c5))

## [0.5.0](https://github.com/fractabase/company-profile/compare/v0.4.0...v0.5.0) (2026-09-22)


### Features

* **App:** add route for TermsAndConditions page ([453c617](https://github.com/fractabase/company-profile/commit/453c617aa712e2949b68f3b4bf7e8fabedb8edbf))
* **terms-and-conditions:** add terms and conditions data structure with sections ([efd3a29](https://github.com/fractabase/company-profile/commit/efd3a2964e59a5ed1ae2ae3e3218740991a01281))
* **terms-and-conditions:** add TermsAndConditionsSection component with TOC and section cards ([a42afbf](https://github.com/fractabase/company-profile/commit/a42afbf5ab576babb4bfe52267556db72ed3023e))
* **terms-and-conditions:** create TermsAndConditions component with scroll-to-top effect ([df2fd2e](https://github.com/fractabase/company-profile/commit/df2fd2eb6371ce69c18a8c11551c7c50943079e9))
* **terms-and-conditions:** create TermsAndConditionsHeader component with metadata display ([09307da](https://github.com/fractabase/company-profile/commit/09307da6394dc5a6f59d466d4a26d1ee472da06c))
* **terms-and-conditions:** implement TermsSectionCard component with GSAP animations ([7fd24e5](https://github.com/fractabase/company-profile/commit/7fd24e56348a7444122ee9aadc80d46138c7f3a1))

## [0.4.0](https://github.com/fractabase/company-profile/compare/v0.3.0...v0.4.0) (2026-09-22)


### Features

* **App:** add route for PrivacyPolicy component ([62353a2](https://github.com/fractabase/company-profile/commit/62353a293815d4ef63ed3a2de0c0de2da8503497))
* **legal-toc:** add mobile and desktop table of contents components ([a041f11](https://github.com/fractabase/company-profile/commit/a041f11b96e4fb32ca3a187d5c40bd1efa86c280))
* **privacy-data:** add privacy policy data structure and content ([f91a499](https://github.com/fractabase/company-profile/commit/f91a499fb3440ee23bfce70f5d8ff5d0b214540b))
* **privacy-policy-header:** add PrivacyPolicyHeader component with legal document details ([c26e408](https://github.com/fractabase/company-profile/commit/c26e4086d8816fb449042d89db1e31e2fafa4981))
* **privacy-policy-section:** add PrivacyPolicySection component with dynamic content rendering ([f3c252e](https://github.com/fractabase/company-profile/commit/f3c252ea8d2a84ca50767273e8ed9dbb55e0f0f5))
* **privacy-policy:** create PrivacyPolicy component with scroll-to-top effect ([d61dd05](https://github.com/fractabase/company-profile/commit/d61dd05276ad4fd40a6660eed31a17928efd3ff6))
* **privacy-section:** add PrivacySectionCard component with GSAP animations ([5f38705](https://github.com/fractabase/company-profile/commit/5f38705c1ae63c5ab75eee8675e71e6bf88da0cc))
* **scroll-spy:** add custom hook for scroll-spy behavior on sections ([53e1891](https://github.com/fractabase/company-profile/commit/53e1891566b5eb8a2094bc9888e1d0df37599de6))

## [0.3.0](https://github.com/fractabase/company-profile/compare/v0.2.1...v0.3.0) (2026-09-22)


### Features

* **services-data:** enhance serviceData with new offerings and detailed descriptions ([be73467](https://github.com/fractabase/company-profile/commit/be734672a05d82475c68f1c0d1e3b6072df3acdb))
* **services:** add AnimatedCounter component for animated number display ([58e04b0](https://github.com/fractabase/company-profile/commit/58e04b036d4bf83c870b40f7da267f9321719fe8))
* **services:** add CTASection component with GSAP animations and interactive elements ([d210614](https://github.com/fractabase/company-profile/commit/d21061415ad0d5ba677b0457c31c1cee88ea50da))
* **services:** add DetailServiceSection component with GSAP animations and responsive design ([7d20218](https://github.com/fractabase/company-profile/commit/7d202181f8354694795ade12c8fc32fce8177a8e))
* **services:** add EngagementModelSection component with GSAP animations and responsive design ([1f2b36e](https://github.com/fractabase/company-profile/commit/1f2b36ea5de24419c916c7d6b9f51b4e77d9d52e))
* **services:** add FAQSection component with accordion functionality and GSAP animations ([06a9599](https://github.com/fractabase/company-profile/commit/06a9599f3f4dd296c44957e1d7ce54244f76bd8a))
* **services:** add ProvenResultSection component for detailed metrics display ([76af58f](https://github.com/fractabase/company-profile/commit/76af58f4ef5198bdced55cf0e610bbe1d003dda2))
* **services:** add Services route to App component ([336ab90](https://github.com/fractabase/company-profile/commit/336ab908608165674a048ac6ce394b9bfb9b0933))
* **services:** add ServicesBackground component with animated background effects ([1ae1aa5](https://github.com/fractabase/company-profile/commit/1ae1aa5cc970d42965e11980d6e130270d752f7e))
* **services:** implement HeroSection component with GSAP animations and responsive design ([88b8a73](https://github.com/fractabase/company-profile/commit/88b8a73b75c3ca932aac5be6593d4bedd0ff3b93))
* **services:** implement Services page with GSAP animations and component structure ([6085fae](https://github.com/fractabase/company-profile/commit/6085faebc54a97d583406e3822b2ad532bf7b38d))

### [0.2.1](https://github.com/fractabase/company-profile/compare/v0.2.0...v0.2.1) (2026-09-18)


### Documentation

* **structure:** add About Us page structure with sections and data files to STRUCTURE-PROJECT.md ([d79d80e](https://github.com/fractabase/company-profile/commit/d79d80e7793a805591ff0f50eb29fa98fe5e92b7))

## [0.2.0](https://github.com/fractabase/company-profile/compare/v0.1.4...v0.2.0) (2026-09-18)


### Features

* **3d-object-space:** implement 3D geometric representation of the Architectural Fractal Crystalline Polyhedron ([018178a](https://github.com/fractabase/company-profile/commit/018178a850fc88a6d855aa8885014e4dd4b53fcf))
* **about-background:** add animated background decorations for the About page ([a78bf2a](https://github.com/fractabase/company-profile/commit/a78bf2aba9721ecc3549cac5395ef06bb8702025))
* **about-cta-section:** add About CTA section with interactive terminal text and scroll-triggered animations ([7ad6e15](https://github.com/fractabase/company-profile/commit/7ad6e15910adb727aebf9ca8316dce5e0d904aa5))
* **about-data:** add company narrative, principles, client segments, and scope capabilities ([9436287](https://github.com/fractabase/company-profile/commit/9436287b672ce5cca1e3789838cef0cd9bb845db))
* **about-story-section:** add interactive narrative section with stages and animations ([b3ab31f](https://github.com/fractabase/company-profile/commit/b3ab31ff6653c68921972bdb5e80a3e7e962aa0a))
* **about-team-section:** add About Team section with interactive member selection and scroll-triggered animations ([33a3b40](https://github.com/fractabase/company-profile/commit/33a3b405d943debe78c0860e5525cb82d8be5f49))
* **about-us:** implement About Us page with sections and smooth scrolling ([ecf73f3](https://github.com/fractabase/company-profile/commit/ecf73f30d1109bb8d2311079cf2833642c98f712))
* **about-values-section:** add About Values section with animated principle cards and scroll-triggered effects ([01f8682](https://github.com/fractabase/company-profile/commit/01f868266c115cf39de34e137f980fb1fab3feeb))
* **about-vision-mission:** add Vision and Mission section with animations and parallax effects ([8c7e098](https://github.com/fractabase/company-profile/commit/8c7e098ead19dd46bd74f7682d39d1bfc49885f5))
* **app:** add route for About Us page in the main application ([7147836](https://github.com/fractabase/company-profile/commit/71478365b4715553cbd701ac6697c549ccb79cbf))
* **hero-section:** add interactive HeroSection component with animations and stats display ([dde7292](https://github.com/fractabase/company-profile/commit/dde7292d44e80bb15780ad4f2265aada0ba2fdb5))
* **icons:** add Crown, Chat, MapPin, and WhatsApp icons ([9302dd4](https://github.com/fractabase/company-profile/commit/9302dd417db5ca2cdf9042785f03babb6533377d))
* **team-data:** add team members and statistics data ([1afd9ac](https://github.com/fractabase/company-profile/commit/1afd9acbed62dc9508675de47e46afe783911080))


### Refactoring

* **navbar:** remove compliance link from navigation ([f76a462](https://github.com/fractabase/company-profile/commit/f76a462ad9fa1de5c62d08d0fdc3ad47feb184e4))


### Styling & UI Tweaks

* **global-styles:** add rotation animation keyframes and variable ([8c04262](https://github.com/fractabase/company-profile/commit/8c04262eabd319f63c5b441f62eea236d55733bf))
* **heading:** update tagline font and paragraph spacing ([16ee0c0](https://github.com/fractabase/company-profile/commit/16ee0c020f7fec03b5770bde6e5aae2fddf22ba2))

### [0.1.4](https://github.com/fractabase/company-profile/compare/v0.1.3...v0.1.4) (2026-09-11)


### Documentation

* **STRUCTURE-PROJECT.md:** add project structure documentation ([5f3c0a6](https://github.com/fractabase/company-profile/commit/5f3c0a637dbe64eb6b0ccdd36e635bc6acd91a06))

### [0.1.3](https://github.com/fractabase/company-profile/compare/v0.1.2...v0.1.3) (2026-09-11)


### Features

* **dependencies:** add GSAP library for animations ([7346f0f](https://github.com/fractabase/company-profile/commit/7346f0f76e9790ccc4763196d1b58bb09185e405))
* **heading:** add Heading component with customizable alignment, tagline, and styling ([03079c1](https://github.com/fractabase/company-profile/commit/03079c1046947a9cacc0dfaee9c7b4d613f170d9))
* **icons:** add reusable ShieldCheck, ArrowUp, Scale, FileText, Database, Cookie, AlertCircle, and UserCheck icon components ([a80b548](https://github.com/fractabase/company-profile/commit/a80b548a0d74be1221d72186190dd7466fc4691f))

### [0.1.2](https://github.com/fractabase/company-profile/compare/v0.1.1...v0.1.2) (2026-09-06)


### Features

* **benefits:** add benefits data structure with descriptions and icons ([e254858](https://github.com/fractabase/company-profile/commit/e2548587ca0ae02432b1df0482818c416fbbe1b9))
* **compliance:** add compliance data structure with legal and project management details ([d155d65](https://github.com/fractabase/company-profile/commit/d155d65563114a2926eaee839b57bee36001eee0))
* **contact-form-data:** add initial data structures for project types, budget ranges, time targets, and country codes ([885baaa](https://github.com/fractabase/company-profile/commit/885baaa132cde03c7038e37f8b1d41006c33525f))
* **contact-info:** add contact information and social links data structure ([e44aca6](https://github.com/fractabase/company-profile/commit/e44aca699c6271bd17542d1615c9e3c2f961b6e2))
* **work-process-steps:** add work process steps data structure ([5ba6b99](https://github.com/fractabase/company-profile/commit/5ba6b998658d4400a6ee6ca81af2e28c87aa284f))

### [0.1.1](https://github.com/fractabase/company-profile/compare/v0.1.0...v0.1.1) (2026-09-06)


### Features

* **contact-section:** enhance form functionality with country code dropdown, validation, and improved user experience ([e6077b8](https://github.com/fractabase/company-profile/commit/e6077b867fc650ee3f0dc243339941aaf620c972))
* **hero-section:** replace hero illustration with browser and phone mockups with floating badges ([afb3489](https://github.com/fractabase/company-profile/commit/afb3489f65174bfefeff9175ccfecce1a85a304d))
* **home:** apply styles to WorkProcessSection component ([c894a92](https://github.com/fractabase/company-profile/commit/c894a92f48b6aa989bd29bf69209ef184a662afd))
* **icons:** add Upload and Plane icons to Icons component ([e115066](https://github.com/fractabase/company-profile/commit/e11506668eafad4010b36bf532f087cbeb9f658a))
* **styles:** add background image for WorkProcess component ([6790b63](https://github.com/fractabase/company-profile/commit/6790b6331c7b2c194d5b00b50e853ed2fa6025d7))
* **styles:** add floating animation to section elements ([6eaa04f](https://github.com/fractabase/company-profile/commit/6eaa04fb7c798faa49d84ca943f4923d8838f0bb))


### Bug Fixes

* **projects:** improve description clarity for payroll system project ([0ce5aff](https://github.com/fractabase/company-profile/commit/0ce5aff68e2d8514ca375837c1bb12e6b763fa68))

## [0.1.0](https://github.com/fractabase/company-profile/compare/v0.0.4...v0.1.0) (2026-09-03)

### [0.0.4](https://github.com/fractabase/company-profile/compare/v0.0.3...v0.0.4) (2026-09-03)


### Features

* add new styles for landing page with Tailwind CSS integration ([e27988c](https://github.com/fractabase/company-profile/commit/e27988caad59542889d72c3dfc3d53af1adb9237))
* add SVG image-1 for landing page ([db0ab7e](https://github.com/fractabase/company-profile/commit/db0ab7e398e201abf1fa7b9c269629763d2a7a20))
* **card:** implement Card component with various subcomponents for UI consistency ([c802028](https://github.com/fractabase/company-profile/commit/c8020280487d6bca1922c9ced581267c647bdc28))
* **card:** update hover effect and adjust CardTitle, CardDescription, and CardContent styles ([bf02508](https://github.com/fractabase/company-profile/commit/bf025089db11a01078eb69c1891eb61ba59e817a))
* **compliance:** add ComplianceSection component to outline compliance features and legal standards ([d04daf0](https://github.com/fractabase/company-profile/commit/d04daf0460178d325548515de75679f7f6bf3a67))
* **contact-section:** enhance layout and functionality of ContactSection component ([aa8ca1f](https://github.com/fractabase/company-profile/commit/aa8ca1fac659522ceae35cc49bc985825bf971c7))
* **contact:** add ContactSection component for project inquiries and consultations ([68532a1](https://github.com/fractabase/company-profile/commit/68532a14369f614fab3d52a5a8df28a0319f6e85))
* **footer:** add Footer component with navigation and social links for landing page ([2598572](https://github.com/fractabase/company-profile/commit/2598572edc90f03e77d3e25e788c6f594c2d435e))
* **hero:** add HeroSection component with introductory content and visuals ([f15a00d](https://github.com/fractabase/company-profile/commit/f15a00d10714e59a18f2dcb61e60f8976bf22ead))
* **hero:** enhance HeroSection with className prop and responsive design adjustments ([9abeddf](https://github.com/fractabase/company-profile/commit/9abeddf2fe3ad7242a5699d5b0417ecabdc3767d))
* **home-page:** add Home component with layout and styling for landing page ([dc70d82](https://github.com/fractabase/company-profile/commit/dc70d82b712e6de155f19e1f8deabc45588aa05a))
* **icons:** add IconWrapper and Icons component for reusable SVG icons ([12778fe](https://github.com/fractabase/company-profile/commit/12778fea55e9ca6c5148a8b57249afd8e4d04d03))
* **icons:** add new social media icons for GitHub and LinkedIn, and additional utility icons ([d3bac85](https://github.com/fractabase/company-profile/commit/d3bac8567189caa8f3e8108834b7e5c3e3dbaab8))
* **portfolio:** add portfolio data for web application projects ([120a83e](https://github.com/fractabase/company-profile/commit/120a83e4ae4387b01e0229d38bf1d8ade143c001))
* **portfolio:** add PortfolioSection component to showcase recent works and case studies ([9f11c67](https://github.com/fractabase/company-profile/commit/9f11c6748eab31a3a1f4c9523551271ec57f864c))
* **portfolio:** add project data for PortfolioSection with detailed project descriptions ([8777d98](https://github.com/fractabase/company-profile/commit/8777d98e36fa33335af515d9e060949bbf3ba2d7))
* **portfolio:** remove deprecated portfolioData file ([66758a0](https://github.com/fractabase/company-profile/commit/66758a0132dab1844aa7bdb4145f18363e6c5f61))
* **servicedata:** add service data for website and application offerings ([e01fb1a](https://github.com/fractabase/company-profile/commit/e01fb1a89b3c5b1f682f75e1b88f716c4feac703))
* **services:** add ServicesSection component with service offerings and details ([2365040](https://github.com/fractabase/company-profile/commit/2365040cda066c68e3298bf39c4c98fedc60cc9d))
* **styles:** enhance dark mode support and update color variables for better contrast ([3e70880](https://github.com/fractabase/company-profile/commit/3e70880a54328d169d5b7bad3ab4c1749a0446c3))
* **theme:** add theme detection script for dark/light mode ([d3fb2fa](https://github.com/fractabase/company-profile/commit/d3fb2fa701520c2b89cc3e55ba32f0a26f59dfb3))
* **theme:** implement ThemeContext, ThemeProvider, and ThemeToggle components for theme management ([df2d8b3](https://github.com/fractabase/company-profile/commit/df2d8b326d10218f4c6eb8feb02a469b57bc296d))
* **ui:** enhance Navbar with responsive design, mobile dropdown, and theme toggle ([cecd5c9](https://github.com/fractabase/company-profile/commit/cecd5c9a7c639f1a0c10a2c5f0eeaab084ac1a28))
* **ui:** implement Navbar component for landing page ([85b89bf](https://github.com/fractabase/company-profile/commit/85b89bfa83252c52c533caa33810f11c64bbbc5f))
* **value-proposition:** add ValuePropositionSection component with benefits overview ([d8b8eb1](https://github.com/fractabase/company-profile/commit/d8b8eb1bebfd65cd2ee05b7938f1110304fcf467))
* **value-proposition:** update layout and styling for ValuePropositionSection ([3b0329c](https://github.com/fractabase/company-profile/commit/3b0329c041ef85401ef8f0de1d25924519df25c5))
* **work-process:** add WorkProcessSection component with project steps overview ([f7ba3d3](https://github.com/fractabase/company-profile/commit/f7ba3d3ddddb3f4f7edab71de9bc64a99c89119e))
* **work-process:** refactor WorkProcessSection for improved layout and structure ([fcb6a09](https://github.com/fractabase/company-profile/commit/fcb6a092e80c27e73dfa84498a978e657c99634b))

### [0.0.3](https://github.com/fractabase/company-profile/compare/v0.0.2...v0.0.3) (2026-08-19)

### 0.0.2 (2026-08-19)
