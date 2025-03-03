import { Github, Linkedin, Twitter } from "lucide-react";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
}

const TeamMemberCard = ({
  name,
  role,
  image,
  github,
  linkedin,
  twitter,
}: TeamMemberProps) => {
  return (
    <div className="bg-white dark:bg-dark-100 rounded-xl p-6 shadow-sm hover:shadow-xl transition-shadow ">
      <div className="flex flex-col items-center">
        <img
          src={image}
          alt={name}
          className="w-24 h-24 rounded-full object-cover mb-4"
        />
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {name}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{role}</p>
        <div className="flex gap-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          )}
          {twitter && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={twitter}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <Twitter className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
