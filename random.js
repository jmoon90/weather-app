
    <div>
      <h1 className='col-sm-8 col-sm-offset-4'>{props.cityState}</h1>
      <h3 className='col-sm-8 col-sm-offset-4'>Select a day</h3>
      <ul>
        {props.forecasts.map(item => <li onClick={props.onForecastClick.bind(props,item)}
                                       className='col-sm-3 col-sm-offset-3'>
                                         {item.weather[0].main}
                                     </li>)}
      </ul>
    </div>
