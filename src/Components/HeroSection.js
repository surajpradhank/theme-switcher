import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import AppTheme from "../Color";
import lighton from "../img/lighton3.jpg"
import lightoff from "../img/lightoff.jpg"

const HeroSection = ({ heading }) => {
    const theme = useContext(ThemeContext)[0];
    const currectTheme = AppTheme[theme];
    const [themeMode, setThemeMode] = useContext(ThemeContext);

    return (
        <div>
            <h1>{heading}</h1>
            <section style={{
                textAlign: "center",
                fontSize: "30px"
            }}>
                <h2>
                    <span>{themeMode === "light" ?
                        <div>
                            Light Off
                            <img
                                src={lightoff}
                                alt="..."
                                width={'150px'}
                                height={'100px'}
                                style={{
                                    verticalAlign: "middle",
                                    margin: "15px"
                                }}
                            />
                        </div>
                        :
                        <div>
                            Light On

                            <img
                                src={lighton}
                                alt="..."
                                width={'150px'}
                                height={'100px'}
                                style={{
                                    verticalAlign: "middle",
                                    margin: "15px"
                                }}
                            />
                        </div>}
                    </span>
                </h2>

            </section>
            <div
                style={{
                    padding: "1rem",
                    backgroundColor: `${currectTheme.backgroundColor}`,
                    color: `${currectTheme.textColor}`,
                    textAlign: "center"
                }}
            >
                <h1>Context API theme toggler</h1>
                <p>This is a nice paragraph</p>
                <button
                    style={{
                        backgroundColor: "#26ae60",
                        padding: "10px 150px",
                        fontSize: "20px",
                        color: "#FFF",
                        border: `${currectTheme.border}`
                    }}
                    onClick={() => {
                        setThemeMode(themeMode === "light" ? "dark" : "light");
                    }}
                >
                    CLick Me
                </button>
            </div>
        </div>
    );
    <div className="container"></div>
};

export default HeroSection;
