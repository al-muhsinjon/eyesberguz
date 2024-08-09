import "../catalogBody.css";
import { Link } from "react-router-dom";
import { CATALOG_CONTENT } from "../../../../constants/catalogContent";

export const CatalogRight = ({ activeTitleIndex, activeServiceIndex }) => {
	const spliceContent = (arr) => {
		let splicedArray;
		if (arr.length > 6) {
			splicedArray = arr.slice(0, 6);
			splicedArray.push({ id: "more", nameOfService: "Ещё", link: "/" });
		} else {
			splicedArray = arr;
		}
		return splicedArray;
	};

	// Getting data of hovered service
	const titleOfService =
		CATALOG_CONTENT[activeTitleIndex].servises[activeServiceIndex]
			.titleOfService;

	// Getting data
	const contentData =
		CATALOG_CONTENT[activeTitleIndex].servises[activeServiceIndex].content;

	// Rendering data
	const content = contentData?.map((el) => {
		return (
			<li key={el.id} className="">
				<Link
					className="font-extrabold font-nunito text-[18px] text-clay hover:text-blue"
					to={el.link}
				>
					{el.nameOfContent}
				</Link>
				{/* Rendering inner data */}
				<ul>
					{spliceContent(el?.contentOfContent || []).map((innerEl) => (
						<li key={innerEl.id} className="my-2">
							<Link
								className={`font-nunito ${
									innerEl.id === "more"
										? "text-blue font-bold"
										: "text-scarpe hover:text-blue"
								}`}
								to={innerEl.link}
							>
								{innerEl.nameOfService}
							</Link>
						</li>
					))}
				</ul>
			</li>
		);
	});

	return (
		<div className="px-4 w-full lg:w-[68%]">
			<h2 className="font-nunito text-[24px] text-clay mt-3">
				{titleOfService}
			</h2>
			<ul className="overflow-auto h-full p-2 cursor-pointer mt-4 flex justify-between flex-wrap gap-3">
				{content}
			</ul>
		</div>
	);
};
