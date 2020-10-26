import React from "react";
import {InfoButton, SuccessButton} from "../../components/button/button";
import {InputWithLabel} from "../../components/input-with-label/input-with-label";
import {Alert} from "../../components/alert/alert";
import {useHistory} from "react-router";

export const ParaphraseList: React.FC<any> = () => {
    const history = useHistory()
    const paraphrase = [
        "the",
        "quick",
        "brown",
        "fox",
        "jumps",
        "over",
        "the",
        "lazy",
        "dog",
        "foo",
        "bar",
        "baz",
    ]
    return (
        <div>
            <h1>Paraphrase</h1>
            <div className="bg-white text-gray-600 shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
                <div className="w-full flex flex-row flex-wrap">
                    { paraphrase.map((p, i) => (
                        <div className="w-1/2 md:w-1/4 py-2">
                            <InputWithLabel id={`paraphrase-${i}`} title={(i + 1).toString()} value={p} />
                        </div>
                    ))}
                </div>
                <div className="md:w-full md:flex flex-row items-center" style={{ minHeight: "8.5rem" }}>
                    <InfoButton title="Prev" onClick={() => history.goBack()} />
                    <SuccessButton title="Create" />
                    <Alert message={"Wallet successfully created! Save this paraphrase somewhere safe!"} />
                </div>
            </div>
        </div>

    )
}

export default ParaphraseList
