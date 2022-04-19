/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState, useEffect } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { AiOutlineDown } from 'react-icons/ai'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SelectWithIcons({
  people,
  current,
  changestyle,
  flag,
  update,
}) {
  const [selected, setSelected] = useState({})
  const [add, setAdd] = useState(0)

  useEffect(() => {
    setSelected(people[current])
    console.log(selected, people[current])
  }, [])
  useEffect(() => {
    update(selected.name)
    // let _tmp = people.findIndex((it) => it.name === selected.name)
    // setAdd(_tmp)
  }, [selected])
  console.log(current, people)
  return (
    <Listbox
      value={selected}
      defaultValue={people[current].name}
      onChange={setSelected}
      enableReinitialize={true}
    >
      {({ open }) => (
        <>
          <div className={`relative mt-1 whitespace-nowrap ${changestyle}`}>
            <Listbox.Button className="relative flex w-full rounded-[10px] px-3 py-[5px]">
              <span className="flex items-center gap-2">
                <img
                  src={selected.image}
                  alt=""
                  className="h-6 w-6 flex-shrink-0 rounded-full"
                />
                {flag === 'center' ? (
                  <div>
                    <AiOutlineDown
                      className=" h-3 font-black"
                      aria-hidden="true"
                    />
                  </div>
                ) : null}
                <span className="block whitespace-nowrap">{selected.name}</span>
              </span>
              <span className="pointer-events-none absolute right-0  my-auto ml-1 flex items-center pr-1">
                {flag === 'left' ? (
                  <div>
                    <AiOutlineDown
                      className="mt-1 h-3 font-black"
                      aria-hidden="true"
                    />
                  </div>
                ) : null}
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options
                className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                // selected={selected.name}
              >
                {people.map((person, i) => (
                  <Listbox.Option
                    key={i}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <img
                            src={person.image}
                            alt=""
                            className="h-6 w-6 flex-shrink-0 rounded-full"
                          />
                          <span
                            className={classNames(
                              selected ? 'font-semibold' : 'font-normal',
                              'ml-3 block truncate'
                            )}
                          >
                            {person.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            {/* <CheckIcon className="h-5 w-5" aria-hidden="true" /> */}
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}
