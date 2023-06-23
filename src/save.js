/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { sendGreetingMessage } from './crud';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({attributes}) {
	const blockProps = useBlockProps.save();

	handleSubmit(attributes.content)

	return (
		<RichText.Content
			{ ...blockProps }
			tagName="p"
			value={ attributes.content }
		/>
	);
}

const handleSubmit = (content) =>{
	sendGreetingMessage(content).then( (response)=> {
		//
	}).catch(err=>{
		console.log("Something went wrong while updating data")
	})
}


