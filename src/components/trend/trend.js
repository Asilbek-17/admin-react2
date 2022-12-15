import './trend.css';
import GraphImage from '../../assets/images/graph.svg';

export function TrendSection() {
	const data = [
		{
			trendText: 'Resolved',
			trendNum: 449,
		},
		{
			trendText: 'Received',
			trendNum: 426,
		},
		{
			trendText: 'Average first response time',
			trendNum: '33m',
		},
		{
			trendText: 'Average response time',
			trendNum: '3h 8m',
		},
		{
			trendText: 'Resolution within SLA',
			trendNum: '94%',
		},
	];
	return (
		<section className='trend d-flex'>
			<div className='start-box'>
				<div className='info-box d-flex align-items-end'>
					<h2 className='trend-title me-auto'>
						Today’s trends
						<span className='trend-span'>as of 25 May 2019, 09:41 PM</span>
					</h2>
					<p className='weekDay-text'>Today</p>
					<p className='weekDay-text2'>Yesterday</p>
				</div>
				<div className='img-box'>
					<img className='m-0' src={GraphImage} alt='Graph image' width={720} height={406} />
				</div>
			</div>
			<ul className='trend-list list-unstyled'>
				{data.map((item) => (
					<li className='trend-item text-center'>
						<p className='trend-text'>{item.trendText}</p>
						<strong className='trend-str'>{item.trendNum}</strong>
					</li>
				))}
			</ul>
		</section>
	);
}
