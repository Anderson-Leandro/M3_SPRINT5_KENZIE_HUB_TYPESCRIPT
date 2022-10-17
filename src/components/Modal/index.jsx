import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../contexts/UserContext";
import { StyledButtonDefault } from "../../styles/components/buttons";
import { StyledInput } from "../../styles/components/inputs";
import { StyledLabel, StyledTitle3 } from "../../styles/components/typography";
import { CustomSelect2 } from "../CustomSelect2";
import { StyledModal } from "./style";
import { TechContext } from "../../contexts/TechContext";

export const Modal = () => {
	const { dropDownController, toasts } = useContext(UserContext);

	const { modalFormSchema, addTech, updateTech, deleteTech } =
		useContext(TechContext);

	const { modalType, setModal, techInfo } = useContext(TechContext);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(modalFormSchema),
	});

	const { onChange, onBlur, name, ref } = register("status");

	toasts(errors);

	return (
		<StyledModal>
			{modalType === "add" ? (
				<div className="modalContainer">
					<div className="modalHeader">
						<StyledTitle3 color="--color-grey-0">
							Cadastrar Tecnologia
						</StyledTitle3>
						<button onClick={() => setModal(false)}>x</button>
					</div>

					<form onSubmit={handleSubmit(addTech)}>
						<div>
							<StyledLabel color="--color-grey-0" htmlFor="title">
								Nome
							</StyledLabel>

							<StyledInput
								id="title"
								placeholder="Digite o nome da tecnologia"
								{...register("title")}
							/>
						</div>

						<div>
							<StyledLabel
								color="--color-grey-0"
								htmlFor="selectLevel"
							>
								Selecionar status
							</StyledLabel>

							<CustomSelect2>
								<StyledInput
									type="text"
									id="selectLevel"
									placeholder="Selecione o status"
									onFocus={dropDownController}
									autoComplete="off"
									onChange={onChange}
									name={name}
									ref={ref}
									onBlur={(event) => {
										onBlur(event);
										dropDownController();
									}}
								/>
							</CustomSelect2>
						</div>

						<StyledButtonDefault color="--color-primary">
							Cadastrar Tecnologia
						</StyledButtonDefault>
					</form>
				</div>
			) : (
				<div className="modalContainer">
					<div className="modalHeader">
						<StyledTitle3 color="--color-grey-0">
							Editar Tecnologia
						</StyledTitle3>
						<button onClick={() => setModal(false)}>x</button>
					</div>

					<form onSubmit={handleSubmit(updateTech)}>
						<div>
							<StyledLabel color="--color-grey-0" htmlFor="title">
								Nome
							</StyledLabel>

							<StyledInput
								id="title"
								{...register("title")}
								value={techInfo.title}
								readOnly
							/>
						</div>

						<div>
							<StyledLabel
								color="--color-grey-0"
								htmlFor="selectLevel"
							>
								Alterar status
							</StyledLabel>

							<CustomSelect2>
								<StyledInput
									value={techInfo.status}
									type="text"
									id="selectLevel"
									placeholder="Selecione o status"
									onFocus={dropDownController}
									autoComplete="off"
									onChange={onChange}
									name={name}
									ref={ref}
									onBlur={(event) => {
										onBlur(event);
										dropDownController();
									}}
								/>
							</CustomSelect2>
						</div>

						<div className="editButtons">
							<StyledButtonDefault
								type="submit"
								color="--color-primary-disable"
							>
								Salvar Alterações
							</StyledButtonDefault>

							<StyledButtonDefault
								type="button"
								onClick={() => deleteTech()}
							>
								Excluir
							</StyledButtonDefault>
						</div>
					</form>
				</div>
			)}
		</StyledModal>
	);
};
