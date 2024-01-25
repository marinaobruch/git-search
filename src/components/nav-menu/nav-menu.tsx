import { AnimatePresence, motion } from 'framer-motion'
import { FC, useState } from 'react'

import { MdOutlineClose } from 'react-icons/md'
import { RxHamburgerMenu } from 'react-icons/rx'
import * as Styled from './nav-menu-styled'

const menuItemList = [
	{
		id: 1,
		label: 'Властитель',
		sort: 'desc',
	},
	{
		id: 2,
		label: 'Начинающий',
		sort: 'asc',
	},
]

interface IProps {
	setOrder: (name: string) => void
}

export const NavMenu: FC<IProps> = ({ setOrder }) => {
	const [isOpenMenu, setIsOpenMenu] = useState(false)

	const handlerOnClickButtonMenu = () => {
		setIsOpenMenu(!isOpenMenu)
	}

	return (
		<Styled.NavMenuContainer>
			<Styled.NavMenuWrapper>
				<Styled.NavMenuButton onClick={handlerOnClickButtonMenu}>
					<AnimatePresence>
						{!isOpenMenu ? (
							<motion.div
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								initial={{ opacity: 1 }}
							>
								<Styled.NavMenuBurgerIcon>
									<RxHamburgerMenu />
									<Styled.NavMenuBurgerText>
										Сортировка по репозиториям
									</Styled.NavMenuBurgerText>
								</Styled.NavMenuBurgerIcon>
							</motion.div>
						) : (
							<motion.div
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								initial={{ opacity: 1 }}
							>
								<Styled.NavMenuCrossIcon>
									<MdOutlineClose />
								</Styled.NavMenuCrossIcon>
							</motion.div>
						)}
					</AnimatePresence>
				</Styled.NavMenuButton>
				<Styled.NavMenuDropdown
					initial={{ height: 0 }}
					transition={{ duration: 0.2 }}
					animate={{
						height: isOpenMenu ? 112 : 0,
					}}
				>
					{menuItemList.map((item) => (
						<Styled.NavMenuItem
							key={item.id}
							onClick={() => setOrder(item.sort)}
						>
							{item.label}
						</Styled.NavMenuItem>
					))}
				</Styled.NavMenuDropdown>
			</Styled.NavMenuWrapper>
		</Styled.NavMenuContainer>
	)
}
