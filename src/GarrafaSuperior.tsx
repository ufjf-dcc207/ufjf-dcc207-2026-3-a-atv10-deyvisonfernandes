import type { GarrafaTypes } from "./types"

type GarrafaSuperiorProps = (
    garrafa: GarrafaTypes
)


export default function GarrafaSuperior({garrafa} : GarrafaSuperiorProps){
    <div>
        <div className='quadrado'>{garrafa.posicao1}</div>
        <div className='quadrado'>{garrafa.posicao2}</div>
        <div className='quadrado'>{garrafa.posicao3}</div>
        <div className='quadrado'>{garrafa.posicao4}</div>
    </div>
}