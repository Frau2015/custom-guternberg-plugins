import {Flex,FlexItem,TextControl,FlexBlock,Placeholder} from '@wordpress/components';
import {registerBlockType} from '@wordpress/blocks';
import {RichText,InnerBlocks,MediaPlaceholder} from '@wordpress/block-editor';
// import {RichText,InnerBlocks} from '@wordpress/block-editor';
// const {useBlockProps} = wp.blockEditor;

const TEMPLATE = [['core/image',{'url':'http://localhost/wordpress/wp-content/uploads/2021/02/masterball-2.jpg'}]];
const SERVICES_TEMPLATE = [
    ['core/columns',{},[
        ['core/column',{},[
            ['core/heading',{level:'4'}],
            ['core/paragraph']
        ]],
        ['core/column',{},[
            ['core/heading',{level:'4'}],
            ['core/paragraph']
        ]],
        ['core/column',{},[
            ['core/heading',{level:'4'}],
            ['core/paragraph']
        ]],
    ]]
]
function makeID(str){
    return str.replace(/\s/g,"-");
}
    // {/* <InnerBlocks
    //     template={[['core/image']]}
    //     templateLock="all"

    // /> */}
registerBlockType('testplug/hero',{
    title: "bibadoula hero",
    category: "banner",
    attributes: {
        theImage:{
            type: 'string',
        },
        title:{
            type:'string',
        },
        description:{
            type:'string',
        },

    },
    edit({attributes,setAttributes}){
        return (
            <div>
                {attributes.theImage?
                    <img src={attributes.theImage}/>
                    :
                    <MediaPlaceholder 
                        multiple={false}
                        allowedTypes={['image']}
                        onSelect={(el) =>{
                            setAttributes({theImage:el.url})
                        }}
                    ></MediaPlaceholder>
                }
                <RichText
                    placeholder="Hero Title"
                    tagName="h2"
                    value = {attributes.title}
                    onChange= {(title)=>{setAttributes({title})}}
                />
                <RichText 
                    placeholder="Description"
                    tagName="p"
                    value = {attributes.description}
                    onChange= {(description)=>{setAttributes({description})}}
                />

            </div>
        );
    },
    save({attributes}){
        return(
        <div class="" >
            {/* <img class="object-contain w-full md:float-left md:pr-10 md:w-7/12 lg:pr-12 " style="max-width: 450px;shape-outside: circle(50%);"src="babyBean.png" alt="" /> */}
            <img class="object-contain w-full md:float-left md:pr-10 md:w-7/12 lg:pr-12 " style="max-width: 450px;shape-outside: circle(50%);" src={attributes.theImage} />
            <div>
                <RichText.Content 
                    tagName="h2"
                    value={attributes.title}
                    id={makeID(attributes.title)}
                />
                <RichText.Content 
                    tagName="p"
                    value={attributes.description}/>
            </div>
        </div>
        );
    }
})
function textToHtml(html)
{
    let arr = html.split(/<br\s*\/?>/i);
    return arr.reduce((el, a) => el.concat(a, <br />), []);
}

function Service(name,description,index){
    return(
        <div className="flex-1 flex pb-4" style="min-width: 250px;" >
            <div>
                <span className="h-8 w-8 flex justify-center items-center font-bold text-white rounded-full bg-burple">{index}</span>
            </div>
            <div className="ml-4">
                { name ? <h3 className="font-semibold md:text-lg">{name}</h3>: ""}
                <p dangerouslySetInnerHTML= {{__html:description}}>      
                </p> 
            </div>
        </div>
    );
}

registerBlockType('testplug/simple-services',{
    title:'simple services',
    category: 'layouts',
    attributes:{
        serviceTitle:{
            type:'string',
            default: 'Services',
        },
        serviceContent:{
            type:'string',
        },
        services:{
            type:'array',
            default: [
                {title:'',content:''},
                {title:'',content:''},
                {title:'',content:''}
            ],
        }

    },
    edit({attributes,setAttributes,setAttribute}){
        let services = attributes.services;
        //duplicted array, with new modications
        const updateServices = (content,serviceT,idx) =>{    
            var newServices = services.map((v,i)=>{
                const serviceT_rev = (serviceT == "title") ? "content" : "title";
                return (idx == i) ? {[serviceT]:content,[serviceT_rev]:v[serviceT_rev]} : v
            });
            return newServices;
        };
        return (
            <div>
                <RichText 
                    onChange = {(serviceTitle) =>{ setAttributes({serviceTitle}) }}
                    value = {attributes.serviceTitle}
                    placeholder="Service Title"
                    tagName="h3"
                />
                <Flex align="flex-start" style={{flexWrap:'wrap'}}>
                    {[...Array(3)].map((v,i)=>(
                    <div style={{width:'48%'}}>
                        <RichText
                            style={{marginBottom:'0px'}}
                            value={services[i].title}
                            onChange={(content)=>setAttributes({services:updateServices(content,"title",i)})}
                            tagName="h4" placeholder="Service Name"
                        />
                        <RichText
                            value={services[i].content}
                            onChange={(content)=>setAttributes({services:updateServices(content,"content",i)})}
                            tagName="p" placeholder="Description about your service"
                        />
                   </div>
                    ))}
                </Flex>
            </div>
        )
    },
    save({attributes}){
        return (
        <div className="mt-4 md:mt-14 md:px-4 clear-both">
            <RichText.Content
                tagName = "h2"
                className="md:text-center"
                value = {attributes.serviceTitle} 
                id = {makeID(attributes.serviceTitle)} 
            />
            {/* <h2 >Services</h2> */}
            <div className="md:flex  md:flex-wrap">
                {attributes.services.map((v,i) => {
                    if(v.content) return Service(v.title,v.content,++i); 
                })}
            </div>
        </div>
        );
    }
})
function GlideBullets(){
    return(
    <div className="glide__bullets lg:hidden" data-glide-el="controls[nav]">
        <button className="glide__bullet border-dark" data-glide-dir="=0"></button>
        <button className="glide__bullet border-dark" data-glide-dir="=1"></button>
        <button className="glide__bullet border-dark" data-glide-dir="=2"></button>
    </div>
    );
}
class Reviews extends React.Component{
    constructor(props){
        super(props);
        this.reviews = props.data;
        console.log(`heres the reviews`,this.reviews)
    }
    componentDidMount(){
        const getPerView = (screenW) =>{
            if (screenW > 1024){
                return 3;
            }else if (screenW > 768){
                return 2;
            }else {
                return 1;
            }
        }
        var glide = new Glide('.glide',{
            perView:getPerView(window.innerWidth),
        }).mount();
        window.addEventListener('resize', function(){
            glide.update({perView:getPerView(this.innerWidth)})
        })

    }
    render(){
        return(
            <div className="glide gray" >
                <div className="glide__track pb-3" data-glide-el="track">
                    <ul className="glide__slides" style={{listStyle:'none'}}>
                        {
                        this.reviews.map((v)=>(
                            <li className='glide__slide'>
                                {/* <div class="mx-auto" > */}
                                <div class="mx-auto" style={{maxWidth: "350px", padding:"2rem"}}>
                                    {/* <img class="block rounded-2xl mb-3 mx-auto shadow-md w-full h-44 lg:h-36"src={v.user.image_url} alt="" style={{objectFit:"cover"}}/> */}
                                    <img class="block rounded-2xl mb-3 mx-auto shadow-md w-full h-44 md:h-36"src={v.user.image_url} alt="" style={{objectFit:"cover"}}/>
                                    <div class="burple-dark mb-2" style={{opacity: 0.45}}>
                                        {[...Array(v.rating)].map(()=>(
                                            <i class="fas fa-star"></i>
                                        ))}
                                    </div>
                                    <div class="mb-2">
                                        <p class=" mb-0 italic">"{v.text}"</p>
                                        <a href={v.url} class=" font-semibold text-blue-500">readmore</a>
                                    </div>
                                    <span class="text-xl font-bold text-gray-800">{v.user.name}</span> 
                                </div>
                            </li>
                        ))
                        }
                    </ul>
                </div>
                <GlideBullets />
            </div>
        )
    }
}
registerBlockType('testplug/yelp-reviews',{
    title:'yelp reviews',
    category: 'widgets',
    attributes: {
        reviewsTitle:{
            default:'Yelp Reviews'
        },
        reviewsID:{
            default:'Yelp-Reviews'
        },
        content:{
            type: 'string',
        },
        reviewsObj:{
            type:'array'
        }
    },
    edit({attributes, setAttributes}){
        const createReviews = (e) =>{
            const f = e.target.files[0];
            let reader = new FileReader();
            reader.readAsText(f);
            reader.onload = function(){
                const p = JSON.parse(reader.result)['reviews']
                console.log(p);
                setAttributes({reviewsObj:p});
            };
        //    console.log(reader.readAsText(f));
        }
        return (
            <div>
                { attributes.reviewsObj
                    ? 
                    <div>
                        <h3>Reviews</h3>
                        <Flex>
                            {
                                attributes.reviewsObj.map((v)=>(
                                    <FlexItem>
                                        <img width="150px" height="150px" style={{objectFit:'cover'}}src={v.user.image_url}/>
                                        <p>{v.text}</p>
                                    </FlexItem>
                                ))
                            } 
                        </Flex>
                    </div>
                    :
                    <Placeholder
                        label="Upload Reviews"
                        instructions="user reviews json from yelp api"
                    >
                        <input 
                            type="file"
                            accept="application/JSON"
                            onChange={createReviews}
                        />
                    </Placeholder>
                }
                
            </div>
        );
    },
    save({attributes}){
        return (

            <div className="mt-2 mb-6">

                <h2 
                    className=" text-center"
                    id={makeID(attributes.reviewsTitle)}
                > 
                    <i className="fab fa-yelp pr-2" style="font-size:1.8rem"></i>
                    {attributes.reviewsTitle}
                </h2>
                { attributes.reviewsObj
                    ? 
                    <Reviews data={attributes.reviewsObj} />
                    :
                    <h2>Please upload a users json</h2>
                }
            </div>
        )
    }

});
registerBlockType('testplug/image-text',{
    title:'image and text layout',
    category: 'layouts',
    attributes: {
        theImage:{
            type:'string',
        },
        title:{
            type: 'string',
        },
        description:{
            type:'string',
        }
    },
    edit({attributes,setAttributes}){
        return(
            <div>
                {
                    attributes.theImage?
                    <div style={{height:"400px",overflow:"hidden"}}>
                        <img src={attributes.theImage} />
                    </div>
                    :
                    <MediaPlaceholder
                        multiple={false}
                        allowedTypes={['image']}
                        onSelect={(el) =>{
                            setAttributes({theImage:el.url})
                        }}
                    >
                    </MediaPlaceholder>
                }
                <div>
                    <RichText
                        placeholder="Title"
                        tagName="h2"
                        value={attributes.title}
                        onChange={(title)=>{setAttributes({title})}}
                    />
                    <RichText
                        placeholder="Description"
                        tagName="p"
                        value={attributes.description}
                        onChange={(description)=>{setAttributes({description})}}
                    />
                </div>
            </div>
        )
    },
    save({attributes}){
        return(
        <div class="pb-10">
            <div class="md:flex">
                <div id="about-img-container" class="w-full relative" style="flex:55%; overflow:hidden;" >
                    <img id="about-img" class="w-full absolute"src={attributes.theImage} alt="" style="object-fit:cover;"/>
                </div>
                <div class="md:px-10" style="flex:45%;">
                    <h2 class="md:pt-0 md:pb-2"
                        id={makeID(attributes.title)}
                    >
                        {attributes.title}
                    </h2>
                    <p>
                        <span>{attributes.description}</span> 
                        <a href="#" class=" font-semibold text-blue-500">readmore</a>
                    </p>
                </div>
            </div>
        </div>

        );
    },
});