import React from "react";
import "./Styles/SlideShow.css"
import im1 from "./images/1.jpg";
import im3 from "./images/3.jpg";
import im4 from "./images/img.png";

const imgs = [im1,im3,im4];

class SlideShow extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			primaryIndex: 0,
			secondaryIndex: 0,
			primaryStyle: {
				opacity: 1
			},
			secondaryStyle: {
				opacity: 0
			},
			autoSlide: true,
			slideTimeout: setTimeout(() => this.autoSlide(), 10000)
		}
	}
	slidePrevious = () => {
		if(!this.state.transit) {
			const nextIndex = this.state.primaryIndex - 1 < 0 ? imgs.length - 1 : this.state.primaryIndex - 1;
			this.transitSlides(nextIndex, false);
		}
	}
	slideNext = () => {
		if(!this.state.transit) {
			const nextIndex = this.state.primaryIndex + 1 === imgs.length ? 0 : this.state.primaryIndex + 1;
			this.transitSlides(nextIndex, true);
		}
	}
	autoSlide = () => {
		this.slideNext();
	}
	transitSlides = (nextIndex, left) => {
		this.setState({
			primaryStyle: {
				animation: left ? 'slideOutLeft 1s ease-in-out' : 'slideOutRight 1s ease-in-out',
				transition: 'all 1s',
				opacity: 0
			},
			secondaryStyle: {
				animation: left ? 'slideInLeft 1s ease-in-out' : 'slideInRight 1s ease-in-out',
				transition: 'all 1s',
				opacity: 1
			},
			transit: true,
			secondaryIndex: nextIndex
		});
		setTimeout(() => this.updatePrimary(), 1000);
		
		if(this.state.autoSlide) {
			clearTimeout(this.state.slideTimeout);
			this.setState({ slideTimeout: setTimeout(() => this.autoSlide(), 10000) });
		}
	}
	updatePrimary = () => {
		this.setState({
			transit: false,
			primaryIndex: this.state.secondaryIndex,
			primaryStyle: {
				opacity: 1
			},
			secondaryStyle: {
				opacity: 0
			}
		});
	}
	positionHandler = (position) => {
		if(!this.state.transit) {
			const diff = this.state.primaryIndex - position;
			if(diff !== 0) {
				this.transitSlides(position, diff < 0 ? true : false);
			}
		}
	}
	checkHandler = (event) => {
		const { autoSlide } = this.state;
		this.setState({ autoSlide: !autoSlide });
		// if we're disabling auto slide (previously was true)
		if(autoSlide) {
			clearTimeout(this.state.slideTimeout);
		} else {
			this.setState({ slideTimeout: setTimeout(() => this.autoSlide(), 10000) });
		}
	}
	render() {
		const indicators = imgs.map((img, i) => {
			const selectStyle = this.state.primaryIndex === i ? { background: 'white' } : {};
			return (
				<div
					key={i} 
					style={selectStyle}
					onClick={() => this.positionHandler(i)}
					className="positionIndicator">
				</div>
			);
		});
		return (
			<div className="slideShow">
				<div
					className="slideArrow arrowLeft"
					onClick={() => this.slidePrevious()}>&lt;</div>
				<div
					className="slideArrow arrowRight"
					onClick={() => this.slideNext()}>&gt;</div>
				<div className="slidePositionWrapper">
					{indicators}
				</div>
				<div className="autoSlide">
					<div className="slideLabel"></div>
				</div>
				<div className="slide" style={this.state.primaryStyle}>
					<img src={imgs[this.state.primaryIndex]} alt="" className="slideImg"/>
				</div>
				<div className="slide" style={this.state.secondaryStyle}>
					<img src={imgs[this.state.secondaryIndex]} alt="" className="slideImg"/>
				</div>
			</div>
		);
	}
}

export default SlideShow;
