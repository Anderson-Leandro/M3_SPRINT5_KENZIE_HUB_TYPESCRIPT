import { StyledSelect } from "../CustomSelect/style";
import arrow from "../../assets/img/seta.png";

export const CustomSelect2 = ({ children }) => {
	function setValue(value) {
		document.querySelector("#selectLevel").value = value;
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
							Iniciante
						</div>
						<div
							className="item"
							id="2"
							onMouseDown={(event) =>
								setValue(event.target.innerText)
							}
						>
							Intermediário
						</div>
						<div
							className="item"
							id="3"
							onMouseDown={(event) =>
								setValue(event.target.innerText)
							}
						>
							Avançado
						</div>
					</div>
				</div>
			</StyledSelect>
		</>
	);
};
