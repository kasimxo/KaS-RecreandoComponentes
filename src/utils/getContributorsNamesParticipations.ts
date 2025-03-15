import * as Targets from '@targets/componentIndex'

export default function getContributorsNamesParticipations(): ContributorParticipation[] {
    console.log()
    const contributors: ContributorParticipation[] = []

    Object.entries(Targets).forEach(([targetName, contributorsArr])=>{
        Object.entries(contributorsArr).forEach(([author, component])=>{
            if(typeof(component)==="number") return
            const authorIndex = contributors.findIndex(el=>el.name===author)
            if(authorIndex<0){
                contributors.push({
                    name: author,
                    participations: 1,
                    targets: [{
                        name: targetName,
                        component: component
                    }]
                })
            } else {
                contributors[authorIndex].participations++
                contributors[authorIndex].targets.push({name: targetName, component: component})
            }
        })
    })

    contributors.sort((a, b)=> b.participations-a.participations)
    return contributors;
}

type ContributorParticipation = {
    name: string,
    participations: number,
    targets: Target[]
}

type Target = {
    name: string,
    component: () => React.JSX.Element
}