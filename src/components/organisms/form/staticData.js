export const formFields = [
    {label: 'Video Title', placeholder: 'Newton s cradle', type: 'text', name: 'video_title', required: true, iconSrc: '/assets/editIcon.png', initialValue: ''},
    {label: 'Subject', placeholder: 'Chemistry', type: 'text', name: 'subject', required: true, iconSrc: '/assets/editIcon.png', initialValue: ''},
    {label: 'Category', placeholder: 'Inspiration', type: 'select', name: 'category', required: true, iconSrc: '/assets/arrow-down-3101.svg', options: ['Motivation', 'Activation', 'Imagination', 'Inspiration'], initialValue: []},
    {label: 'Primers', placeholder: 'Lorem Ipsum', type: 'select', name: 'primers', required: true, iconSrc: '/assets/arrow-down-3101.svg', options: ['Lorem Ipsum', 'Lorem Ipsum'], initialValue: []},
    {label: 'Add Hashtag', placeholder: 'Keyword', type: 'hashtag', name: 'hashTags', required: true, iconSrc: '/assets/plusIcon.png', initialValue: []},
    {label: 'Current Hashtag', placeholder: 'Science', type: 'text', name: 'currentHashtag', required: true, iconSrc: '/assets/editIcon.png', initialValue: ''},
]

export const levelFormFields = [
    {label: 'Level 1', placeholder: 'Lorem Ipsum', type: 'select', name: 'level1', required: true, iconSrc: '/assets/arrow-down-3101.svg', options: ['Lorem Ipsum', 'Lorem Ipsum'], initialValue: []},
    {label: 'Level 2', placeholder: 'Lorem Ipsum', type: 'select', name: 'level2', required: true, iconSrc: '/assets/arrow-down-3101.svg', options: ['Lorem Ipsum', 'Lorem Ipsum'], initialValue: []},
    {label: 'Level 3', placeholder: 'Lorem Ipsum', type: 'select', name: 'level3', required: true, iconSrc: '/assets/arrow-down-3101.svg', options: ['Lorem Ipsum', 'Lorem Ipsum'], initialValue: []},
    {label: 'Level 4', placeholder: 'Lorem Ipsum', type: 'select', name: 'level4', required: true, iconSrc: '/assets/arrow-down-3101.svg', options: ['Lorem Ipsum', 'Lorem Ipsum'], initialValue: []},
]

export const buttons = [
    {text: 'Cancel Edit', variant: '', type: 'button', name: 'cancel'},
    {text: 'Save Changes', variant: 'primary', type: 'submit', name: 'save'}
]