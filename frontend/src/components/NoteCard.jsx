import { Link } from "react-router-dom";
import { marked } from "marked";
import { formatDate, htmlToPlainText } from "../lib/utils";
import { MenuBtn } from "./MenuBtn";
export function NoteCard({ _id, title, content, createdAt }) {
  const html = marked.parse(content);

  const plainText = htmlToPlainText(html);

  return (
    <div className="w-full max-w-full sm:max-w-sm mx-auto relative cursor-pointer rounded-xl border border-gray-300 dark:border-gray-700 p-5 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow focus:outline-none focus:ring-4 focus:ring-primary">
      <Link to={`${_id}`}>
        <div>
          <h3 className="text-2xl font-semibold text-primary mb-2 truncate mr-4">
            {title}
          </h3>
          <time className="text-xs text-gray-500 dark:text-gray-400 mb-4 block">
            {formatDate(createdAt)}
          </time>
          <p className="text-gray-700 dark:text-gray-300 line-clamp-2 leading-relaxed">
            {plainText}
          </p>
        </div>
      </Link>

      {/* 3-Dot Menu Button */}
      <div className="absolute top-4 right-4">
        <MenuBtn id={_id} isPrintable={false} />
      </div>
    </div>
  );
}

export default NoteCard;
