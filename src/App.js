import './assets/styles/index.css';
import mainFoto from './assets/images/photo.png';
import { SiteNavbar } from './components/sitebar/navbar';
import { SeaArch, DingDong } from './components/iconsImgs/iconLogo';
import { Cards } from './components/cards/card';
import { TrendSection } from './components/trend/trend';
import { TaskCard, TaskCard2 } from './components/tasks-card/tasks';
function App() {
	return (
		<div>
			<div className='row'>
				<SiteNavbar />
				<div className='col-10 mainSection'>
					<header className='d-flex justify-content-between'>
						<a className='logo__main_header  ' href='#'>
							Overview
						</a>
						<div className='logos__dearc_headers '>
							<span>
								<SeaArch />
							</span>
							<span className='dingDong'>
								<DingDong />
							</span>
							<span className='fotoMain'>
								<span className='Jones'>Jones Ferdinand</span>{' '}
								<img src={mainFoto} />
							</span>
						</div>
					</header>
					<ul className='card-lists list-unstyled '>
						<Cards />
					</ul>
					<TrendSection />
					<footer className='d-flex align-items-center'>
						<TaskCard />
						<TaskCard2 />
					</footer>
				</div>
			</div>
		</div>
	);
}
export default App;
