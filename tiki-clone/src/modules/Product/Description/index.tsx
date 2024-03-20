import ContentBox from "../../../components/Common/ContentBox";

export default function ProductDescription(){
    return(
        <div className="w-5/12 flex flex-col gap-4">
            <ContentBox >
                <div>This in description</div>
            </ContentBox>
            <ContentBox >
                <div>This in description</div>
            </ContentBox>
            <ContentBox >
                <div>This in description</div>
            </ContentBox>
        </div>
    )
}