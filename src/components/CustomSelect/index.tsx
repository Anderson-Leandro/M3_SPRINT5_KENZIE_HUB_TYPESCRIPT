import { StyledSelect } from "./style";
// import arrow from "../../assets/img/seta.png";
import { ReactNode } from "react";

interface CustomSelectProps {
	children: ReactNode;
}

export const CustomSelect = ({ children }: CustomSelectProps) => {
	function setValue(value: string) {
		(document.querySelector("#selectModulo") as HTMLInputElement).value =
			value;
	}

	return (
		<StyledSelect>
			{children}

			{/* <img src={arrow} alt="" />
				<img src="../../assets/img/seta.png" alt="" /> */}

			<div className="dropDown displayNone" id="selectDropDown">
				<div className="dropDownList">
					<div
						className="item"
						id="1"
						onMouseDown={(event) =>
							setValue((event.target as HTMLDivElement).innerText)
						}
					>
						Primeiro módulo
					</div>
					<div
						className="item"
						id="2"
						onMouseDown={(event) =>
							setValue((event.target as HTMLDivElement).innerText)
						}
					>
						Segundo módulo
					</div>
					<div
						className="item"
						id="3"
						onMouseDown={(event) =>
							setValue((event.target as HTMLDivElement).innerText)
						}
					>
						Terceiro módulo
					</div>
					<div
						className="item"
						id="4"
						onMouseDown={(event) =>
							setValue((event.target as HTMLDivElement).innerText)
						}
					>
						Quarto módulo
					</div>
					<div
						className="item"
						id="5"
						onMouseDown={(event) =>
							setValue((event.target as HTMLDivElement).innerText)
						}
					>
						Quinto módulo
					</div>
					<div
						className="item"
						id="6"
						onMouseDown={(event) =>
							setValue((event.target as HTMLDivElement).innerText)
						}
					>
						Sexto módulo
					</div>
				</div>
			</div>
		</StyledSelect>
	);
};
