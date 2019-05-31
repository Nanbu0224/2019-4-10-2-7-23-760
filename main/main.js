module.exports = function main({distance:driveDistance,parkTime:waitTime}) {
	var waitPrice = 0;
	waitPrice = waitTime * 0.25;
	var distancePrice = 0;
	if (driveDistance > 0 && driveDistance< 2){
		distancePrice = 6;
	}
	if (driveDistance >=2 && driveDistance <=8){
		distancePrice = 6 + (driveDistance - 2) * 0.8;
	}
	if (driveDistance > 8) {
		distancePrice = 6 + 4.8 + (driveDistance - 8) * 1.2;
	}
	return (Math.round(distancePrice+waitPrice));
};
