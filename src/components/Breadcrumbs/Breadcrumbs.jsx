import { Link, useLocation } from "react-router-dom";

export const Breadcrumbs = ({ mx, my }) => {
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
  const loc = useLocation();
  const currentPath = [];

  const crumbs = loc.pathname
    .split('/')
    .filter(crumb => crumb !== '')
    .map((crumb, index, array) => {
      currentPath.push(`/${crumb}`);
      console.log(currentPath[currentPath.length - 1]);
      
      const isLast = index === array.length - 1;
      const linkClassName = isLast ? '' : 'text-gray'; // Apply red color class if it's the last item

      return (
        <div className="after:content-['>'] after:mx-2.5" key={crumb}>
          <Link className={`${linkClassName} text-sm font-inter`} to={currentPath.join('')}>
            {capitalize(crumb)}
          </Link>
        </div>
      );
    });

  return <div className={`flex items-center ${my || ''}`}>{crumbs}</div>;
};





  // const crumbs = loc.pathname.split('/')
  //   .map(item => item == '' ? '/' : item)
  //   .map(crumb => {
  //     currentPath.push(crumb)
  //     console.log(crumb)
  //     return(
  //       <Link>{crumb}</Link>
  //     )
  //   })
  //   console.log(crumbs);
  //   console.log(currentPath.join(''));