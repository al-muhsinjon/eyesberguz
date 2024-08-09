import { Component } from "react";

export const SharedComponent = (WrappedComponent) => {
	return class extends Component {
		//STATE IN ORDER TO CHANGE BACKGROUND WHEN ACTIVE
		state = {
			isLeftClicked: false,
			isMiddleClicked: false,
			activeTitleIndex: 0,
			activeServiceIndex: 0,
		};

		// FUNCTION THAT GETS RENDERS CONTENT OF TITLE WHEN IT IS HOVERED
		handleTitleHover = (index) => {
			this.setState({
				activeTitleIndex: index,
				activeServiceIndex: 0,
				isLeftClicked: true,
			});
		};

		// FUNCTION THAT GETS RENDERS CONTENT OF SERVICES WHEN IT IS HOVERED
		handleServiceHover = (index) => {
			this.setState({ activeServiceIndex: index, isMiddleClicked: true });
		};

		// FUNCTION TO RESET LEFT CLICKED STATE
		resetLeftClicked = () => {
			this.setState({ isLeftClicked: false });
		};

		// FUNCTION TO RESET MIDDLE CLICKED STATE
		resetMiddleClicked = () => {
			this.setState({ isMiddleClicked: false });
		};

		render() {
			return (
				<WrappedComponent
					{...this.props}
					activeTitleIndex={this.state.activeTitleIndex}
					activeServiceIndex={this.state.activeServiceIndex}
					onTitleHover={this.handleTitleHover}
					onServiceHover={this.handleServiceHover}
					isLeftClicked={this.state.isLeftClicked}
					isMiddleClicked={this.state.isMiddleClicked}
					resetLeftClicked={this.resetLeftClicked}
					resetMiddleClicked={this.resetMiddleClicked}
				/>
			);
		}
	};
};
