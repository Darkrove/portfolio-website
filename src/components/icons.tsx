import {
  Bug,
  LucideProps,
  Moon,
  SunMedium,
  MoveUpRightIcon,
  Star,
  Link,
  AtSign,
  Pin,
  Hourglass,
  ArrowRight,
  Command,
} from "lucide-react";
import { AiFillStar } from "react-icons/ai";
import {
  FaGraduationCap,
  FaReact,
  FaCode,
  FaJava,
  FaHourglassEnd,
  FaCircle,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPython,
  SiTypescript,
  SiVuedotjs,
  SiNuxtdotjs,
} from "react-icons/si";
import { LiaJava } from "react-icons/lia";

type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  up: MoveUpRightIcon,
  star: AiFillStar,
  link: Link,
  circle: FaCircle,
  mail: AtSign,
  cmd: Command,
  graduationHat: FaGraduationCap,
  react: FaReact,
  code: FaCode,
  arrow: ArrowRight,
  html: SiHtml5,
  css: SiCss3,
  nuxt: SiNuxtdotjs,
  vue: SiVuedotjs,
  js: SiJavascript,
  ts: SiTypescript,
  python: SiPython,
  java: (props: LucideProps) => (
    <svg
      width={512}
      height={512}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#a)" fill="currentColor">
        <path d="M246.24 97.489c-22.96 14.785-48.981 31.544-62.929 59.266-24.218 48.371 49.562 101.133 52.713 103.353.731.524 1.615.78 2.483.78.931 0 1.861-.292 2.617-.875 1.464-1.12 1.886-3.022 1.003-4.574-.27-.474-37.398-52.211-25.766-80.148 6.556-15.747 18.338-26.32 37.382-40.45 17.44-12.952 37.209-27.62 48.774-44.786 25.394-37.78-2.823-74.926-3.119-75.297-1.123-1.434-3.19-1.96-4.955-1.253-1.768.714-2.745 2.471-2.348 4.195.063.248 5.546 24.809-9.721 50.117-6.294 10.46-20.12 19.367-36.134 29.672Z" />
        <path d="M238.507 274.079c-3.684 0-7.2-1.123-10.166-3.247-2.165-1.526-22.354-16.016-39.186-36.789-30.289-37.382-26.311-65.875-17.64-83.193 15.577-30.961 44.413-49.53 67.582-64.451 14.016-9.019 27.252-17.537 31.97-25.381 12.026-19.937 8.316-39.607 8.154-40.425-1.822-8.056 2.492-16.173 10.276-19.319A17.543 17.543 0 0 1 296.071 0c5.34 0 10.468 2.476 13.714 6.626 9.708 12.202 29.431 52.473 3.678 90.786-12.817 19.024-33.514 34.396-51.775 47.958-17.863 13.254-27.857 22.277-33.15 34.99-5.761 13.838 8.518 44.566 24.223 67.26.512.741.768 1.183.811 1.261 4.195 7.364 2.323 16.441-4.435 21.61-2.976 2.301-6.77 3.588-10.63 3.588Zm60.762-210.375a88.159 88.159 0 0 1-5.6 10.928c-7.877 13.093-22.897 22.76-40.291 33.952-21.537 13.87-45.951 29.592-58.283 54.101-7.957 15.892-1.075 33.431 9.75 48.545-4.323-14.197-5.757-28.778-.665-41.008 7.613-18.288 20.529-30.266 41.699-45.975 16.638-12.357 35.408-26.298 45.694-41.564 4.323-6.429 6.674-12.855 7.696-18.979Z" />
        <path d="M356.344 122.923c1.464-1.008 1.897-2.848 1.012-4.318-.89-1.467-2.816-2.117-4.535-1.52-3.522 1.224-86.289 30.432-86.289 65.73 0 24.326 11.349 37.184 19.636 46.567 3.254 3.679 6.059 6.856 6.986 9.575 2.601 7.823-3.566 21.958-6.161 26.743-.747 1.381-.381 3.046.89 4.053.685.54 1.546.815 2.401.815.735 0 1.467-.197 2.107-.604 1.422-.908 34.779-22.497 28.799-48.516-2.228-9.883-7.54-17.109-12.225-23.484-7.253-9.877-12.493-17.017-4.543-30.19 9.315-15.372 51.497-44.555 51.922-44.851Z" />
        <path d="M290.285 283.761a17.137 17.137 0 0 1-10.563-3.642c-6.31-5-8.118-13.691-4.334-20.693 2.865-5.283 5.361-13.094 5.217-16.138-.839-1.229-2.9-3.559-4.319-5.163-8.587-9.722-22.947-25.981-22.947-55.308 0-19.825 16.337-39.051 48.557-57.145 22.024-12.367 44.144-20.194 46.594-21.046a17.121 17.121 0 0 1 5.642-.954c5.915 0 11.472 3.097 14.499 8.084 4.484 7.443 2.36 17.103-4.811 22.034-19.557 13.577-43.078 32.506-48.115 40.818-3.202 5.304-3.394 5.624 3.893 15.545 5.183 7.054 11.627 15.824 14.461 28.39 7.885 34.307-30.203 59.75-34.572 62.537a17.05 17.05 0 0 1-9.202 2.681Zm.495-118.451c-6.893 6.221-11.057 12.266-11.057 17.507 0 19.343 8.676 29.167 16.332 37.834 4.008 4.53 7.799 8.817 9.584 14.049.24.722.443 1.458.613 2.203 2.042-4.104 3.028-8.382 2.082-12.501-1.633-7.242-5.692-12.768-9.992-18.618-6.945-9.455-16.259-22.139-7.562-40.474Zm111.595 97.798c-17.796 0-34.66 8.91-35.378 9.292-1.637.884 36.601 9.009 40.007 30.48 3.016 18.521-32.282 47.491-47.397 57.49a4.064 4.064 0 0 0-1.503 4.973 4.062 4.062 0 0 0 3.748 2.497c.288 0 .573-.03.851-.096 3.588-.764 93.109-22.792 84.206-71.79-5.425-30.031-29.656-32.846-44.534-32.846Z" />
        <path d="M459.892 293.61c-3.601-19.933-16.503-43.694-57.517-43.694-20.668 0-39.508 9.736-41.643 10.877a13.121 13.121 0 0 0-2.942 2.181c-.489.296-.971.612-1.429.978-1.807 1.301-47.504 33.324-128.184 36.218-7.783.274-15.343.413-22.479.413-60.704 0-84.102-9.993-88.347-15.883-.526-.733-.524-1.034-.392-1.463 1.699-2.39 13.134-8.819 46.807-11.287 7.266-.532 12.725-6.854 12.192-14.121-.533-7.267-6.872-12.73-14.121-12.192-42.116 3.086-64.316 12.34-69.848 29.068-2.937 8.758-1.538 17.776 3.946 25.406 5.957 8.266 17.109 14.639 33.331 19.101-3.066 4.48-4.378 9.523-3.913 15.123.893 10.61 8.461 18.243 19.04 23.744-2.514 3.496-4.216 7.661-4.756 12.577-.917 8.163 1.466 15.874 6.891 22.298 11.329 13.413 35.976 20.532 79.906 23.082 4.958.289 9.898.437 14.683.437 52.485 0 88.399-16.725 89.901-17.436 6.585-3.119 9.395-10.985 6.275-17.569-3.119-6.585-10.986-9.397-17.569-6.275-.315.149-31.992 14.896-78.609 14.896-4.274 0-8.697-.132-13.15-.392-47.127-2.735-58.556-10.539-61.281-13.766-.894-1.059-.908-1.636-.826-2.365.009-.087.021-.127.02-.127.84-1.611 7.839-4.242 15.425-4.442.061-.001.119-.012.179-.013 8.005 1.266 15.779 2.041 22.463 2.504 4.591.317 9.532.478 14.696.478 51.731 0 116.338-15.952 116.976-16.114 7.052-1.781 11.323-8.932 9.557-15.989-1.765-7.058-8.924-11.354-15.979-9.601-.619.153-63.18 15.32-110.562 15.32-4.551 0-8.882-.14-12.866-.414-29.876-2.071-47.662-8.54-52.961-12.594 2.198-1.528 7.246-4.17 18.136-6.806 10.567.797 22.148 1.202 34.763 1.202 7.436 0 15.309-.145 23.409-.43 77.766-2.79 125.485-29.889 139.636-39.177 19.619 7.32 24.587 13.574 25.232 17.644.241 1.481-1.704 8.463-13.412 20.702-8.961 9.369-20.643 18.637-28.232 23.658-6.94 4.58-9.625 13.464-6.419 21.042a17.203 17.203 0 0 0 15.93 10.63c1.299 0 2.594-.148 3.848-.441v-.001c5.771-1.353 105.314-25.787 94.195-86.987Zm-53.911 43.238c11.189-13.494 15.793-25.348 14.052-36.032-1.671-10.539-8.079-18.509-15.747-24.493 18.276.41 26.911 6.87 29.645 21.992 2.942 16.196-11.237 29.139-27.95 38.533Z" />
        <path d="M413.005 423.279c-5.352-4.946-13.698-4.614-18.641.735-7.047 7.625-61.814 28.571-175.882 28.72a16.361 16.361 0 0 0-.443-.007c-106.999 0-133.13-11.406-139.173-18.192-1.065-1.199-1.262-2.036-1.24-2.794.811-.854 4.684-4.12 18.45-7.022 12.997-2.741 29.187-3.956 40.235-4.632 7.273-.445 12.807-6.7 12.363-13.972-.445-7.273-6.684-12.799-13.971-12.363-38.605 2.36-80.059 7.162-83.245 34.443-1.029 8.791 1.625 17.04 7.69 23.871 6.87 7.716 19.163 15.529 51.148 20.761 11.608 7.101 31.245 18.407 43.913 21.862 1.654.451 3.535 1.001 5.659 1.621 17.238 5.033 49.323 14.402 103.629 15.545 4.568.096 9.117.144 13.654.144 30.725 0 60.697-2.202 89.271-6.568 7.201-1.1 12.148-7.831 11.048-15.033-1.1-7.203-7.825-12.147-15.033-11.048-31.295 4.781-64.396 6.843-98.384 6.128-27.14-.571-48.311-3.33-64.599-6.489 5.803.078 11.837.12 18.14.121.15.005.302.008.454.008h.011c110.916-.094 179.188-19.348 195.683-37.198 4.944-5.35 4.614-13.696-.737-18.641Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="currentColor" d="M0 0h512v512H0z" />
        </clipPath>
      </defs>
    </svg>
  ),
  next: SiNextdotjs,
  hourglass: FaHourglassEnd,
  whatsapp: (props: LucideProps) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.513 3.487A11.81 11.81 0 0 0 12.103 0C5.55 0 .216 5.333.213 11.888a11.863 11.863 0 0 0 1.588 5.944L.114 23.993l6.303-1.653a11.874 11.874 0 0 0 5.681 1.447h.005c6.553 0 11.887-5.333 11.889-11.888a11.817 11.817 0 0 0-3.48-8.412Zm-2.99 10.889c-.297-.15-1.757-.867-2.03-.97-.272-.102-.47-.148-.668.15-.197.297-.767.966-.94 1.164-.174.198-.347.223-.644.074-.297-.149-1.254-.462-2.39-1.474-.882-.788-1.481-1.76-1.652-2.058-.171-.298-.019-.456.13-.607.134-.133.297-.346.445-.52.149-.174.199-.297.297-.496.1-.198.05-.371-.024-.52-.074-.149-.669-1.611-.916-2.206-.241-.579-.486-.5-.668-.513-.171-.008-.372-.01-.57-.01a1.092 1.092 0 0 0-.793.372c-.272.297-1.039 1.016-1.039 2.478 0 1.462 1.064 2.875 1.213 3.073.148.198 2.095 3.199 5.073 4.486a17.03 17.03 0 0 0 1.694.627c.711.228 1.359.194 1.87.118.57-.085 1.758-.719 2.006-1.413.248-.693.248-1.289.171-1.412-.076-.124-.268-.192-.565-.341v-.002Z"
        fill="currentColor"
      />
    </svg>
  ),
  x: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="r-1nao33i r-4qtqp9 r-yyyyoo r-16y2uox r-8kz0gk r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp"
      {...props}
    >
      <path
        fill="currentColor"
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
      />
    </svg>
  ),
  fork: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      viewBox="0 0 16 16"
      data-view-component="true"
      className="octicon octicon-repo-forked Button-visual"
      {...props}
    >
      <path
        fill="currentColor"
        d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"
      />
    </svg>
  ),
  pin: Pin,
  logo: (props: LucideProps) => (
    <svg
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#a)">
        <path
          d="M0 100.042c0-55.228 44.772-100 100-100h299.916c55.23 0 100 44.772 100 100v299.916c0 55.228-44.77 100-100 100H100c-55.229 0-100-44.772-100-100V100.042Z"
          fill="#16A34A"
        />
        <path
          d="M252.958 136.269c-40.576 18.664-68.989 59.157-70.238 106.483v80.32h-.083c0 .832.083 1.666.083 2.416v174.47h103.316V364.98c34.078-14.664 68.238-29.244 102.316-43.908v-91.236c-34.078 15.498-68.238 30.912-102.316 46.41V210.09c34.078-14.664 68.238-29.245 102.316-43.909V74.946c-45.076 20.413-90.236 40.91-135.394 61.323Z"
          fill="#fff"
        />
        <path
          d="M500 124.354c-37.16-16.497-74.404-32.994-111.564-49.492v91.235c37.16 15.664 74.404 31.245 111.564 46.909v-88.652Zm0 154.974c-37.16-16.496-74.404-32.994-111.564-49.492v91.236c37.16 15.664 74.404 31.244 111.564 46.908v-88.652Z"
          fill="#000"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path
            fill="#fff"
            d="M100 0h300a100 100 0 0 1 100 100v300a100 100 0 0 1-100 100H100A100 100 0 0 1 0 400V100A100 100 0 0 1 100 0z"
          />
        </clipPath>
      </defs>
    </svg>
  ),
  twitter: (props: IconProps) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37256 18.6274 0 12 0C5.37256 0 0 5.37256 0 12C0 18.6274 5.37256 24 12 24ZM18.9543 5H16.5173L12.5012 9.59058L9.02905 5H4L10.0088 12.8573L4.31396 19.3665H6.75244L11.1479 14.3441L14.9893 19.3665H19.8938L13.6299 11.0854L18.9543 5ZM17.0122 17.9077H15.6619L6.84595 6.38208H8.29517L17.0122 17.9077Z"
        fill="currentColor"
      />
    </svg>
  ),
  gitHub: (props: IconProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  radix: (props: IconProps) => (
    <svg viewBox="0 0 25 25" fill="none" {...props}>
      <path
        d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"
        fill="currentcolor"
      ></path>
      <path d="M12 0H4V8H12V0Z" fill="currentcolor"></path>
      <path
        d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"
        fill="currentcolor"
      ></path>
    </svg>
  ),
  aria: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.966 22.624l-1.69-4.281H8.122l3.892-9.144 5.662 13.425zM8.884 1.376H0v21.248zm15.116 0h-8.884L24 22.624Z" />
    </svg>
  ),
  npm: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z"
        fill="currentColor"
      />
    </svg>
  ),
  yarn: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm.768 4.105c.183 0 .363.053.525.157.125.083.287.185.755 1.154.31-.088.468-.042.551-.019.204.056.366.19.463.375.477.917.542 2.553.334 3.605-.241 1.232-.755 2.029-1.131 2.576.324.329.778.899 1.117 1.825.278.774.31 1.478.273 2.015a5.51 5.51 0 0 0 .602-.329c.593-.366 1.487-.917 2.553-.931.714-.009 1.269.445 1.353 1.103a1.23 1.23 0 0 1-.945 1.362c-.649.158-.95.278-1.821.843-1.232.797-2.539 1.242-3.012 1.39a1.686 1.686 0 0 1-.704.343c-.737.181-3.266.315-3.466.315h-.046c-.783 0-1.214-.241-1.45-.491-.658.329-1.51.19-2.122-.134a1.078 1.078 0 0 1-.58-1.153 1.243 1.243 0 0 1-.153-.195c-.162-.25-.528-.936-.454-1.946.056-.723.556-1.367.88-1.71a5.522 5.522 0 0 1 .408-2.256c.306-.727.885-1.348 1.32-1.737-.32-.537-.644-1.367-.329-2.21.227-.602.412-.936.82-1.08h-.005c.199-.074.389-.153.486-.259a3.418 3.418 0 0 1 2.298-1.103c.037-.093.079-.185.125-.283.31-.658.639-1.029 1.024-1.168a.94.94 0 0 1 .328-.06zm.006.7c-.507.016-1.001 1.519-1.001 1.519s-1.27-.204-2.266.871c-.199.218-.468.334-.746.44-.079.028-.176.023-.417.672-.371.991.625 2.094.625 2.094s-1.186.839-1.626 1.881c-.486 1.144-.338 2.261-.338 2.261s-.843.732-.899 1.487c-.051.663.139 1.2.343 1.515.227.343.51.176.51.176s-.561.653-.037.931c.477.25 1.283.394 1.71-.037.31-.31.371-1.001.486-1.283.028-.065.12.111.209.199.097.093.264.195.264.195s-.755.324-.445 1.066c.102.246.468.403 1.066.398.222-.005 2.664-.139 3.313-.296.375-.088.505-.283.505-.283s1.566-.431 2.998-1.357c.917-.598 1.293-.76 2.034-.936.612-.148.57-1.098-.241-1.084-.839.009-1.575.44-2.196.825-1.163.718-1.742.672-1.742.672l-.018-.032c-.079-.13.371-1.293-.134-2.678-.547-1.515-1.413-1.881-1.344-1.997.297-.5 1.038-1.297 1.334-2.78.176-.899.13-2.377-.269-3.151-.074-.144-.732.241-.732.241s-.616-1.371-.788-1.483a.271.271 0 0 0-.157-.046z"
        fill="currentColor"
      />
    </svg>
  ),
  pnpm: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M0 0v7.5h7.5V0zm8.25 0v7.5h7.498V0zm8.25 0v7.5H24V0zM8.25 8.25v7.5h7.498v-7.5zm8.25 0v7.5H24v-7.5zM0 16.5V24h7.5v-7.5zm8.25 0V24h7.498v-7.5zm8.25 0V24H24v-7.5z"
        fill="currentColor"
      />
    </svg>
  ),
  // react: (props: IconProps) => (
  //   <svg viewBox="0 0 24 24" {...props}>
  //     <path
  //       d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"
  //       fill="currentColor"
  //     />
  //   </svg>
  // ),
  tailwind: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"
        fill="currentColor"
      />
    </svg>
  ),
  google: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
      />
    </svg>
  ),
  apple: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
        fill="currentColor"
      />
    </svg>
  ),
  paypal: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z"
        fill="currentColor"
      />
    </svg>
  ),
  spinner: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),
  linkedin: (props: IconProps) => (
    <svg
      viewBox="0 0 22 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="currentColor"
        d="M5.54736 21H1.19267V6.97969H5.54736V21ZM3.36767 5.06719C1.97548 5.06719 0.845795 3.91406 0.845795 2.52187C0.845795 1.12969 1.97548 0 3.36767 0C4.75986 0 5.88954 1.12969 5.88954 2.52187C5.88954 3.91406 4.75986 5.06719 3.36767 5.06719ZM21.8458 21H17.5005V14.175C17.5005 12.5484 17.4677 10.4625 15.2364 10.4625C12.9724 10.4625 12.6255 12.2297 12.6255 14.0578V21H8.27548V6.97969H12.452V8.89219H12.513C13.0942 7.79062 14.5145 6.62812 16.6333 6.62812C21.0395 6.62812 21.8505 9.52969 21.8505 13.2984V21H21.8458Z"
      ></path>
    </svg>
  ),
};
