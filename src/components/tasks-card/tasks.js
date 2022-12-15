import './tasks.css';

export function TaskCard() {
	const dataTickets = [
		{
			id: 1,
			text: 'Waiting on Feature Request',
			taskNum: 4238,
		},
		{
			id: 2,
			text: 'Awaiting Customer Response',
			taskNum: 4238,
		},
		{
			id: 3,
			text: 'Awaiting Developer Fix',
			taskNum: 4238,
		},
		{
			id: 4,
			text: 'Pending',
			taskNum: 4238,
		},
	];
	return (
		<div className='tasks-wrap'>
			<div className='info-box d-flex justify-content-between'>
				<div>
					<h3 className='tasks-title'>Unresolved tickets</h3>
					<p className='info-text'>
						Group: <span className='info-spn'>Support</span>
					</p>
				</div>
				<a className='info-link' href='#!'>
					View details
				</a>
			</div>
			<ul className='tickets-list m-0 p-0'>
				{dataTickets.map((item) => (
					<li
						className='d-flex align-items-center justify-content-between tickets-item'
						key={item.id}
					>
						<p className='tasks-text'>{item.text}</p>
						<span className='tickets-span'>{item.taskNum}</span>
					</li>
				))}
			</ul>
		</div>
	);
}

export function TaskCard2() {
	const dataTasks = [
		{
			id: 1,
			text: 'Finish ticket update',
			tasks: 'Urgent',
			color: 'btn1',
		},
		{
			id: 2,
			text: 'Create new ticket example',
			tasks: 'New',
			color: 'btn2',
		},
		{
			id: 3,
			text: 'Update ticket report',
			tasks: 'Default',
			color: 'btn3',
		},
	];
    function submitFn(evt) {
        evt.preventDefault()
    }
	return (
		<div className='tasks-wrap'>
			<div className='info-box d-flex justify-content-between'>
				<div>
					<h3 className='tasks-title'>Tasks</h3>
					<p className='info-text'>Today</p>
				</div>
				<a className='info-link' href='#!'>
					View all
				</a>
			</div>
			<form autoComplete='off' onSubmit={submitFn}>
				<input className='task-inp' type='text' placeholder='Create new task' />
                <button className='d-none' type='submit'></button>
			</form>
			<ul className='tickets-list m-0 p-0'>
				{dataTasks.map((item) => (
					<li
						className='d-flex align-items-center justify-content-start tickets-item'
						key={item.id}
					>
						<input className='check' type='checkbox' />
						<p className='tasks-text'>{item.text}</p>
						<button className={item.color + ' btnTask'}>{item.tasks}</button>
					</li>
				))}
			</ul>
		</div>
	);
}
