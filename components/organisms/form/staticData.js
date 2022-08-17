export const formFields = [
    {label: 'Video Title', placeholder: 'Newton s cradle', type: 'text', name: 'video_title', required: true, iconSrc: '/assets/editIcon.png'},
    {label: 'Subject', placeholder: 'Chemistry', type: 'text', name: 'subject', required: true, iconSrc: '/assets/editIcon.png'},
    {label: 'Category', placeholder: 'Inspiration', type: 'select', name: 'category', required: true, iconSrc: '/assets/arrow-down-3101.svg', options: ['Motivation', 'Activation', 'Imagination', 'Inspiration']},
    {label: 'Primers', placeholder: 'Lorem Ipsum', type: 'text', name: 'primers', required: true, iconSrc: '/assets/arrow-down-3101.svg'},
    {label: 'Add Hashtag', placeholder: 'Keyword', type: 'hashtag', name: 'hashtags', required: true, iconSrc: '/assets/plusIcon.png'},
    {label: 'Current Hashtag', placeholder: 'Science', type: 'text', name: 'current_hashtag', required: true, iconSrc: '/assets/editIcon.png'},
]

export const levelFormFields = [
    {label: 'Level 1', placeholder: 'Lorem Ipsum', type: 'select', name: 'level1', required: true, iconSrc: '/assets/arrow-down-3101.svg', options: ['Lorem Ipsum', 'Lorem Ipsum']},
    {label: 'Level 2', placeholder: 'Lorem Ipsum', type: 'select', name: 'level2', required: true, iconSrc: '/assets/arrow-down-3101.svg', options: ['Lorem Ipsum', 'Lorem Ipsum']},
    {label: 'Level 3', placeholder: 'Lorem Ipsum', type: 'select', name: 'level3', required: true, iconSrc: '/assets/arrow-down-3101.svg', options: ['Lorem Ipsum', 'Lorem Ipsum']},
    {label: 'Level 4', placeholder: 'Lorem Ipsum', type: 'select', name: 'level4', required: true, iconSrc: '/assets/arrow-down-3101.svg', options: ['Lorem Ipsum', 'Lorem Ipsum']},
]

export const buttons = [
    {text: 'Cancel Edit', variant: ''},
    {text: 'Save Changes', variant: 'primary'}
]