import { StyledSelect } from "../CustomSelect/style";
import arrow from "../../assets/img/seta.png";
import { ReactNode } from "react";

interface CustomSelect2Props {
	children: ReactNode;
}

export const CustomSelect2 = ({ children }: CustomSelect2Props) => {
	function setValue(value: string) {
		(document.querySelector("#selectLevel") as HTMLInputElement).value =
			value;
	}

	return (
		<>
			<StyledSelect>
				{children}

				<img src={arrow} alt="" />
				<img src="../../assets/img/seta.png" alt="" />

				<div className="dropDown displayNone" id="selectDropDown">
					<div className="dropDownList">
						<div
							className="item"
							id="1"
							onMouseDown={(event) =>
								setValue(
									(event.target as HTMLDivElement).innerText
								)
							}
						>
							Iniciante
						</div>
						<div
							className="item"
							id="2"
							onMouseDown={(event) =>
								setValue(
									(event.target as HTMLDivElement).innerText
								)
							}
						>
							Intermediário
						</div>
						<div
							className="item"
							id="3"
							onMouseDown={(event) =>
								setValue(
									(event.target as HTMLDivElement).innerText
								)
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
