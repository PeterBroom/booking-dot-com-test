import s from './Results.module.scss'
export const PlaceType = ({placetype}:any) => {
    let text: string;
    let colour: string;
    let contrast: string;
    switch (placetype){
        case 'A':
            colour = '#ff8000'
            contrast = '#262626'
            text = 'Airport';
            break;
        case 'C':
            colour = '#0071c2'
            contrast = '#FFFFFF'
            text = 'City';
            break;
        case 'T':
            colour = '#474747'
            contrast = '#FFFFFF'
            text = 'Station';
            break;
        case 'D':
            colour = '#008009'
            contrast = '#FFFFFF'
            text = 'District';
            break;
        default:
            colour = '#CCC'
            contrast = '#262626'
            text = ''
            break
    }
    return (
        <div className={s.placeType}>
            <span style={{'backgroundColor': colour, 'color': contrast}}>{text}</span>
        </div>
    )
}