import React, { useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link'

export const DropDown = ({ nav }) => {
  const [isOpen, setIsOpen] = useState(false)
  const show = () => setIsOpen(true)
  const hide = () => setIsOpen(false)

  return (
    <DropDownContainer onMouseLeave={hide} onMouseOver={show}>
      <DropDownHeader>
        <Link href={nav.default.isNotLink ? '' : nav.default.href}>
          <A>{nav.default.label}</A>
        </Link>
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          {nav.options.map(option => (
            <div>
              <LinkCont>
                <Link href={option.href}>
                  <ChildNavs>{option.label}</ChildNavs>
                </Link>
              </LinkCont>
              {option.options &&
                option.options.map(subNav => {
                  return (
                    <SubLinkCont>
                      <Link
                        key={subNav.href}
                        href={{ pathname: subNav.href, path: subNav.href }}
                      >
                        <A>- {subNav.label}</A>
                      </Link>
                    </SubLinkCont>
                  )
                })}
            </div>
          ))}
        </DropDownListContainer>
      )}
    </DropDownContainer>
  )
}

const DropDownContainer = styled('div')`
  position: relative;
`

const DropDownHeader = styled('div')`
  cursor: pointer;
`

const DropDownListContainer = styled('div')`
  position: absolute;
  background: #fff5f5;
  padding: 18px 30px;
  left: -30px;
  min-width: 150px;
  z-index: 33;
`

let A = styled.a`
  font-size: 18px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: capitalize;
  cursor: pointer;
  color: #3a4b6d;
`

let ChildNavs = styled.a`
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: flex-end;
  color: #3a4b6d;
  cursor: pointer;
  white-space: nowrap;
`

let LinkCont = styled.div`
  padding: 10px 0;
`
let SubLinkCont = styled.div`
  padding: 5px 0;
  margin-left: 15px;
  white-space: nowrap;
`