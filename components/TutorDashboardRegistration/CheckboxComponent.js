import React, { useState } from 'react'

function CheckboxComponent({ options }) {
  const [expanded, setExpanded] = useState(false)

  const showCheckboxes = (values) => {
    setExpanded(values)
  }

  return (
    <>
      <div class="multiselect w-[135px]">
        <div
          class="selectBox relative"
          onClick={() => showCheckboxes(!expanded)}
        >
          <select className="w-auto rounded-[10px] border border-[#C1C1C1] px-4  py-1 text-[#494949]">
            <option>Select Days</option>
          </select>
          <div class="overSelect"></div>
        </div>
        <div
          id="checkboxes"
          className={
            expanded === true ? `absolute block w-auto bg-white z-10` : ''
          }
        >
          {options.map((item) => {
            console.log('item', item.days)
            return (
              <>
                <label for={item.days} className="text-[#7E7E7E] flex gap-3 px-4 py-2.5">
                  <input type="checkbox" id={item.days} className="h-4 w-4 my-auto"/>
                  {item.days}
                </label>
              </>
            )
          })}
          {/* <label for="one">
            <input type="checkbox" id="one" />
            First checkbox
          </label>
          <label for="two">
            <input type="checkbox" id="two" />
            Second checkbox
          </label>
          <label for="three">
            <input type="checkbox" id="three" />
            Third checkbox
          </label> */}
        </div>
      </div>
    </>
  )
}

export default CheckboxComponent
