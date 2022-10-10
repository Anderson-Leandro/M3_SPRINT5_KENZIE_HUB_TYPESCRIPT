import { StyledSelect } from "./style";
import arrow from "../../assets/img/seta.png";

export const CustomSelect = ({ children }) => {
	function setValue(value) {
		document.querySelector("#selectModulo").value = value;
	}

	return (
		<>
			<StyledSelect>
				{children}

				<img src={arrow} alt="" />

				<div className="dropDown displayNone" id="selectDropDown">
					<div className="dropDownList">
						<div
							className="item"
							id="1"
							onMouseDown={(event) =>
								setValue(event.target.innerText)
							}
						>
							Primeiro módulo
						</div>
						<div
							className="item"
							id="2"
							onMouseDown={(event) =>
								setValue(event.target.innerText)
							}
						>
							Segundo módulo
						</div>
						<div
							className="item"
							id="3"
							onMouseDown={(event) =>
								setValue(event.target.innerText)
							}
						>
							Terceiro módulo
						</div>
						<div
							className="item"
							id="4"
							onMouseDown={(event) =>
								setValue(event.target.innerText)
							}
						>
							Quarto módulo
						</div>
						<div
							className="item"
							id="5"
							onMouseDown={(event) =>
								setValue(event.target.innerText)
							}
						>
							Quinto módulo
						</div>
						<div
							className="item"
							id="6"
							onMouseDown={(event) =>
								setValue(event.target.innerText)
							}
						>
							Sexto módulo
						</div>
					</div>
				</div>
			</StyledSelect>
		</>
	);
};
