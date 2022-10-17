import { useContext, useState } from "react";
import { Header } from "../../components/Header";
import { Modal } from "../../components/Modal";
import { UserContext } from "../../contexts/UserContext";
import { StyledButtonMedium } from "../../styles/components/buttons";
import { StyledContainer } from "../../styles/components/container";
import {
	StyledHeadline,
	StyledHeadlineBold,
	StyledTitle1,
	StyledTitle3,
} from "../../styles/components/typography";
import { StyledSection } from "./style";

export const Dashboard = () => {
	const { user, setUser } = useContext(UserContext);

	const [modal, setModal] = useState(false);

	const [modalType, setModalType] = useState("");

	const [techInfo, setTechInfo] = useState("");

	const logout = () => {
		setUser("");
		localStorage.clear();
	};

	return (
		<>
			<Header buttonDesc="Sair" buttonPath="/" logout={logout} />

			<StyledSection>
				<StyledContainer>
					<StyledTitle1 color="--color-grey-0">
						Olá, {user.name}
					</StyledTitle1>

					<StyledHeadlineBold color="--color-grey-1">
						{user.course_module}
					</StyledHeadlineBold>
				</StyledContainer>
			</StyledSection>

			<StyledSection>
				<StyledContainer className="infoPage">
					<div>
						<StyledTitle1 color="--color-grey-0">
							Tecnologias
						</StyledTitle1>

						<StyledButtonMedium
							onClick={() => {
								setModalType("add");
								setModal(true);
							}}
						>
							+
						</StyledButtonMedium>
					</div>

					{user.techs?.length > 0 && (
						<ul>
							{user.techs.map((tech) => (
								<li
									key={tech.id}
									onClick={() => {
										setModalType("edit");
										setTechInfo(tech);
										setModal(true);
									}}
								>
									<StyledTitle3 color="--color-grey-0">
										{tech.title}
									</StyledTitle3>
									<StyledHeadline color="--color-grey-1">
										{tech.status}
									</StyledHeadline>
								</li>
							))}
						</ul>
					)}
				</StyledContainer>
			</StyledSection>

			{modal && (
				<Modal
					type={modalType}
					setModal={setModal}
					techInfo={techInfo}
				/>
			)}
		</>
	);
};
