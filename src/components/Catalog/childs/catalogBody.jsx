import React, { useState, useEffect } from "react";
import { CatalogLeft } from "./catalogLeft/catalogLeft";
import { CatalogMiddle } from "./catalogMiddle/catalogMiddle";
import { CatalogRight } from "./catalogRight/catalogRight";
import { SharedComponent } from "./sharedComponent/sharedComponent";
import "./catalogBody.css";

const CatalogBody = ({
	activeTitleIndex,
	activeServiceIndex,
	onTitleHover,
	onServiceHover,
	setActiveView,
	activeView,
	isLeftClicked,
	isMiddleClicked,
	resetLeftClicked,
	resetMiddleClicked,
}) => {
	const [isMobile, setIsMobile] = useState(false);
	const [isTablet, setIsTablet] = useState(false);

	const updateView = () => {
		const width = window.innerWidth;
		setIsMobile(width < 768);
		setIsTablet(width >= 768 && width < 1024);
	};

	useEffect(() => {
		updateView();
		window.addEventListener("resize", updateView);
		return () => window.removeEventListener("resize", updateView);
	}, []);

	useEffect(() => {
		if (isMobile) {
			if (isLeftClicked) {
				setActiveView("middle");
				resetLeftClicked();
			} else if (isMiddleClicked) {
				setActiveView("right");
				resetMiddleClicked();
			}
		} else if (isTablet && isMiddleClicked) {
			setActiveView("right");
			resetMiddleClicked();
		}
	}, [
		isMobile,
		isTablet,
		isLeftClicked,
		isMiddleClicked,
		setActiveView,
		resetLeftClicked,
		resetMiddleClicked,
	]);

	const renderView = () => {
		if (isMobile) {
			switch (activeView) {
				case "left":
					return (
						<CatalogLeft
							activeTitleIndex={activeTitleIndex}
							onTitleHover={onTitleHover}
						/>
					);
				case "middle":
					return (
						<CatalogMiddle
							activeTitleIndex={activeTitleIndex}
							activeServiceIndex={activeServiceIndex}
							onServiceHover={onServiceHover}
						/>
					);
				case "right":
					return (
						<CatalogRight
							activeTitleIndex={activeTitleIndex}
							activeServiceIndex={activeServiceIndex}
						/>
					);
				default:
					return null;
			}
		}

		if (isTablet) {
			switch (activeView) {
				case "left":
				case "middle":
					return (
						<>
							<CatalogLeft
								activeTitleIndex={activeTitleIndex}
								onTitleHover={onTitleHover}
							/>
							<CatalogMiddle
								activeTitleIndex={activeTitleIndex}
								activeServiceIndex={activeServiceIndex}
								onServiceHover={onServiceHover}
							/>
						</>
					);
				case "right":
					return (
						<CatalogRight
							activeTitleIndex={activeTitleIndex}
							activeServiceIndex={activeServiceIndex}
						/>
					);
				default:
					return null;
			}
		}

		return (
			<>
				<CatalogLeft
					activeTitleIndex={activeTitleIndex}
					onTitleHover={onTitleHover}
				/>
				<CatalogMiddle
					activeTitleIndex={activeTitleIndex}
					activeServiceIndex={activeServiceIndex}
					onServiceHover={onServiceHover}
				/>
				<CatalogRight
					activeTitleIndex={activeTitleIndex}
					activeServiceIndex={activeServiceIndex}
				/>
			</>
		);
	};

	return renderView();
};

export const EnhancedCatalogBody = SharedComponent(CatalogBody);
