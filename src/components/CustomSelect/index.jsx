import { StyledInput } from "../../styles/components/inputs";
import { StyledSelect } from "./style";
import arrow from "../../assets/img/seta.png";

export const CustomSelect = () => {
	function setValue(target) {
		document.querySelector("#selectModulo").value = target.innerText;

		console.log(target.value);
	}

	function dropDownController() {
		document
			.querySelector("#selectDropDown")
			.classList.toggle("displayNone");
	}

	return (
		<>
			<StyledSelect>
				<StyledInput
					type="text"
					name="selectModulo"
					id="selectModulo"
					placeholder="Selecione o módulo"
					onFocus={dropDownController}
					onBlur={dropDownController}
					autoComplete="off"
				/>

				<img src={arrow} alt="" />

				<div className="dropDown displayNone" id="selectDropDown">
					<div className="dropDownList">
						<div
							className="item"
							id="1"
							onMouseDown={(event) => setValue(event.target)}
						>
							Primeiro módulo
						</div>
						<div
							className="item"
							id="2"
							onMouseDown={(event) => setValue(event.target)}
						>
							Segundo módulo
						</div>
						<div
							className="item"
							id="3"
							onMouseDown={(event) => setValue(event.target)}
						>
							Terceiro módulo
						</div>
						<div
							className="item"
							id="4"
							onMouseDown={(event) => setValue(event.target)}
						>
							Quarto módulo
						</div>
						<div
							className="item"
							id="5"
							onMouseDown={(event) => setValue(event.target)}
						>
							Quinto módulo
						</div>
						<div
							className="item"
							id="6"
							onMouseDown={(event) => setValue(event.target)}
						>
							Sexto módulo
						</div>
					</div>
				</div>
			</StyledSelect>
		</>
	);
};
