/* eslint-disable react/prop-types */

const Button = ({
  Icon,
  children,
  href,
  containerClassName,
  onClick,
}) => {
  const Inner = () => (
    <>
      <span className="relative gap-1 flex items-center  inner-before  overflow-hidden">
        <span className="relative z-2 font-poppins base-bold ">
          {children}
        </span>

        {Icon && (
          <Icon />
        )}
      </span>

    </>
  );
  return href ? (
    <a
      className={
        `relative    ${containerClassName}`}
      href={href}
    >
      <Inner />
    </a>
  ) : (
    <button
      className={
        `relative    ${containerClassName}`}
      onClick={onClick}
    >
      <Inner />
    </button>
  );
};
export default Button;
