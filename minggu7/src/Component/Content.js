/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import image from './Image.png'

export default function Content() {
    return (
        
        <div class="row ml-3">
            <div class="col-4">
                <img src={image} alt="..." class="img-thumbnail" />
            </div>
            <div class="col-6">
                <h5>Main Content</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pellentesque orci vitae accumsan semper. Suspendisse massa lorem, porttitor dictum hendrerit nec, fermentum eget magna. Nullam molestie urna at enim ornare tincidunt. Mauris finibus ex tortor. Proin rutrum interdum sem non dignissim. Fusce arcu mauris, lobortis sed diam vel, sagittis convallis odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed sed arcu vulputate, blandit dui sed, fermentum massa. Duis sit amet massa eros. Curabitur ut justo orci.
                    
                Sed faucibus ut odio ut mattis. Fusce accumsan ante sed sodales maximus. Phasellus tincidunt porta erat, nec auctor est tincidunt ut. Integer vitae urna mollis, varius tellus eget, lobortis justo. Nunc vitae luctus lectus. Fusce dictum eget elit quis lacinia. Mauris ligula tortor, pulvinar a mauris ut, facilisis efficitur magna. Mauris dapibus libero tempus neque imperdiet, ac mattis odio congue. Phasellus ornare quam sem, a vulputate neque pellentesque in. Nulla eleifend felis nulla, nec dapibus est tempus fringilla. Cras pretium odio turpis, ac elementum leo commodo a. Sed pharetra dui ut lectus vulputate luctus. Pellentesque sed orci blandit, efficitur neque eget, dignissim velit. Nullam ante lectus, sollicitudin vitae est a, facilisis auctor sapien.</p>
            </div>
        </div>
    )
}