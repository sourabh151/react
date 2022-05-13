import React from 'react'

const Tabs = ({data,changeTab}) => {
	return (
		<ul className="tabs">
            {data.map((item) => {
              return (
                <li className="tab-item" key={item.id}>
                  <button
                    className="btn"
                    onClick = {
                    	()=>changeTab(item)
                    }
                  >
                    {item.company}
                  </button>
                </li>
              );
            })}
          </ul>
	)
}

export default Tabs