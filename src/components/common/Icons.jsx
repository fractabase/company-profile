import { IconWrapper } from "./IconWrapper";

export const Icons = {
  Code: (props) => (
    <IconWrapper {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </IconWrapper>
  ),
  Mobile: (props) => (
    <IconWrapper {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
      />
    </IconWrapper>
  ),
  Users: (props) => (
    <IconWrapper {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </IconWrapper>
  ),
  Check: (props) => (
    <IconWrapper {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </IconWrapper>
  ),
  ArrowRight: (props) => (
    <IconWrapper {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </IconWrapper>
  ),
  Star: (props) => (
    <IconWrapper {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
      />
    </IconWrapper>
  ),
  ExternalLink: (props) => (
    <IconWrapper {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </IconWrapper>
  ),
  Shield: (props) => (
    <IconWrapper {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </IconWrapper>
  ),
  Website: (props) => (
    <IconWrapper {...props}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18" />
      <circle cx="6" cy="6.5" r="0.6" fill="currentColor" />
    </IconWrapper>
  ),
  WebApp: (props) => (
    <IconWrapper {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </IconWrapper>
  ),
  CustomSoftware: (props) => (
    <IconWrapper {...props}>
      <path d="M12 3l3 3-3 3-3-3 3-3z" />
      <path d="M12 15l3 3-3 3-3-3 3-3z" />
      <path d="M3 12l3-3 3 3-3 3-3-3z" />
      <path d="M15 12l3-3 3 3-3 3-3-3z" />
    </IconWrapper>
  ),
  Integration: (props) => (
    <IconWrapper {...props}>
      <circle cx="6" cy="6" r="3" />
      <circle cx="18" cy="18" r="3" />
      <path d="M8.5 7.5L15.5 16.5" />
    </IconWrapper>
  ),
  ProblemSolving: (props) => (
    <IconWrapper {...props}>
      <path d="M12 2v6M12 16v6M4 12h6M14 12h6" />
    </IconWrapper>
  ),
  Customization: (props) => (
    <IconWrapper {...props}>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </IconWrapper>
  ),
  Efficiency: (props) => (
    <IconWrapper {...props}>
      <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
    </IconWrapper>
  ),
  Scalability: (props) => (
    <IconWrapper {...props}>
      <path d="M4 20V10M12 20V4M20 20v-7" />
    </IconWrapper>
  ),
  TechnicalExpertise: (props) => (
    <IconWrapper {...props}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
    </IconWrapper>
  ),
  LongTermValue: (props) => (
    <IconWrapper {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </IconWrapper>
  ),
  Lock: (props) => (
    <IconWrapper strokeWidth={2} {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
      />
    </IconWrapper>
  ),
  ChevronDown: (props) => (
    <IconWrapper strokeWidth={2} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </IconWrapper>
  ),
  Location: (props) => (
    <IconWrapper strokeWidth={1.5} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
      />
    </IconWrapper>
  ),
  ShieldInfo: (props) => (
    <IconWrapper strokeWidth={1.5} {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z"
      />
    </IconWrapper>
  ),
  Mail: ({ className = "w-10 h-10" }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="currentColor">
      <path d="M125.4 128C91.5 128 64 155.5 64 189.4C64 190.3 64 191.1 64.1 192L64 192L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 192L575.9 192C575.9 191.1 576 190.3 576 189.4C576 155.5 548.5 128 514.6 128L125.4 128zM528 256.3L528 448C528 456.8 520.8 464 512 464L128 464C119.2 464 112 456.8 112 448L112 256.3L266.8 373.7C298.2 397.6 341.7 397.6 373.2 373.7L528 256.3zM112 189.4C112 182 118 176 125.4 176L514.6 176C522 176 528 182 528 189.4C528 193.6 526 197.6 522.7 200.1L344.2 335.5C329.9 346.3 310.1 346.3 295.8 335.5L117.3 200.1C114 197.6 112 193.6 112 189.4z" />
    </svg>
  ),
  WhatsApp: ({ className = "w-10 h-10" }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="currentColor">
      <path d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z" />
    </svg>
  ),
};
