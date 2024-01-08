/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      email
      company {
        id
        company_name
        company_tagline
        website_url
        email
        phone_no
        no_of_employee
        founded
        description
        logo
        location
        headquarter_location
        is_verifeid
        is_sponsored
        total_earning
        hourly_rate
        project_earnings
        services {
          name
          percentage
          __typename
        }
        social_media {
          facebook
          instagram
          twitter
          linkedin
          other
          __typename
        }
        ownerId
        owner {
          id
          name
          email
          company {
            id
            company_name
            company_tagline
            website_url
            email
            phone_no
            no_of_employee
            founded
            description
            logo
            location
            headquarter_location
            is_verifeid
            is_sponsored
            total_earning
            hourly_rate
            project_earnings
            services {
              name
              percentage
              __typename
            }
            social_media {
              facebook
              instagram
              twitter
              linkedin
              other
              __typename
            }
            ownerId
            owner {
              id
              name
              email
              email_verified
              status
              createdAt
              updatedAt
              userCompanyId
              __typename
            }
            reviews {
              nextToken
              __typename
            }
            createdAt
            status
            updatedAt
            __typename
          }
          email_verified
          status
          createdAt
          updatedAt
          userCompanyId
          __typename
        }
        reviews {
          items {
            id
            company_name
            company_locaion
            offered_service
            start_date
            end_date
            project_cost
            project_description
            status
            is_approved
            review
            rating {
              quality_work
              cost
              response_time
              overall_experience
              __typename
            }
            review_description
            ownerId
            owner {
              id
              name
              email
              email_verified
              status
              createdAt
              updatedAt
              userCompanyId
              __typename
            }
            IOCompany {
              id
              company_name
              company_tagline
              website_url
              email
              phone_no
              no_of_employee
              founded
              description
              logo
              location
              headquarter_location
              is_verifeid
              is_sponsored
              total_earning
              hourly_rate
              project_earnings
              ownerId
              createdAt
              status
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            iOCompanyReviewsId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        status
        updatedAt
        __typename
      }
      email_verified
      status
      createdAt
      updatedAt
      userCompanyId
      __typename
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      email
      company {
        id
        company_name
        company_tagline
        website_url
        email
        phone_no
        no_of_employee
        founded
        description
        logo
        location
        headquarter_location
        is_verifeid
        is_sponsored
        total_earning
        hourly_rate
        project_earnings
        services {
          name
          percentage
          __typename
        }
        social_media {
          facebook
          instagram
          twitter
          linkedin
          other
          __typename
        }
        ownerId
        owner {
          id
          name
          email
          company {
            id
            company_name
            company_tagline
            website_url
            email
            phone_no
            no_of_employee
            founded
            description
            logo
            location
            headquarter_location
            is_verifeid
            is_sponsored
            total_earning
            hourly_rate
            project_earnings
            services {
              name
              percentage
              __typename
            }
            social_media {
              facebook
              instagram
              twitter
              linkedin
              other
              __typename
            }
            ownerId
            owner {
              id
              name
              email
              email_verified
              status
              createdAt
              updatedAt
              userCompanyId
              __typename
            }
            reviews {
              nextToken
              __typename
            }
            createdAt
            status
            updatedAt
            __typename
          }
          email_verified
          status
          createdAt
          updatedAt
          userCompanyId
          __typename
        }
        reviews {
          items {
            id
            company_name
            company_locaion
            offered_service
            start_date
            end_date
            project_cost
            project_description
            status
            is_approved
            review
            rating {
              quality_work
              cost
              response_time
              overall_experience
              __typename
            }
            review_description
            ownerId
            owner {
              id
              name
              email
              email_verified
              status
              createdAt
              updatedAt
              userCompanyId
              __typename
            }
            IOCompany {
              id
              company_name
              company_tagline
              website_url
              email
              phone_no
              no_of_employee
              founded
              description
              logo
              location
              headquarter_location
              is_verifeid
              is_sponsored
              total_earning
              hourly_rate
              project_earnings
              ownerId
              createdAt
              status
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            iOCompanyReviewsId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        status
        updatedAt
        __typename
      }
      email_verified
      status
      createdAt
      updatedAt
      userCompanyId
      __typename
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      email
      company {
        id
        company_name
        company_tagline
        website_url
        email
        phone_no
        no_of_employee
        founded
        description
        logo
        location
        headquarter_location
        is_verifeid
        is_sponsored
        total_earning
        hourly_rate
        project_earnings
        services {
          name
          percentage
          __typename
        }
        social_media {
          facebook
          instagram
          twitter
          linkedin
          other
          __typename
        }
        ownerId
        owner {
          id
          name
          email
          company {
            id
            company_name
            company_tagline
            website_url
            email
            phone_no
            no_of_employee
            founded
            description
            logo
            location
            headquarter_location
            is_verifeid
            is_sponsored
            total_earning
            hourly_rate
            project_earnings
            services {
              name
              percentage
              __typename
            }
            social_media {
              facebook
              instagram
              twitter
              linkedin
              other
              __typename
            }
            ownerId
            owner {
              id
              name
              email
              email_verified
              status
              createdAt
              updatedAt
              userCompanyId
              __typename
            }
            reviews {
              nextToken
              __typename
            }
            createdAt
            status
            updatedAt
            __typename
          }
          email_verified
          status
          createdAt
          updatedAt
          userCompanyId
          __typename
        }
        reviews {
          items {
            id
            company_name
            company_locaion
            offered_service
            start_date
            end_date
            project_cost
            project_description
            status
            is_approved
            review
            rating {
              quality_work
              cost
              response_time
              overall_experience
              __typename
            }
            review_description
            ownerId
            owner {
              id
              name
              email
              email_verified
              status
              createdAt
              updatedAt
              userCompanyId
              __typename
            }
            IOCompany {
              id
              company_name
              company_tagline
              website_url
              email
              phone_no
              no_of_employee
              founded
              description
              logo
              location
              headquarter_location
              is_verifeid
              is_sponsored
              total_earning
              hourly_rate
              project_earnings
              ownerId
              createdAt
              status
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            iOCompanyReviewsId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        status
        updatedAt
        __typename
      }
      email_verified
      status
      createdAt
      updatedAt
      userCompanyId
      __typename
    }
  }
`;
export const createQuotation = /* GraphQL */ `
  mutation CreateQuotation(
    $input: CreateQuotationInput!
    $condition: ModelQuotationConditionInput
  ) {
    createQuotation(input: $input, condition: $condition) {
      id
      name
      email
      organization
      description
      file
      category
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateQuotation = /* GraphQL */ `
  mutation UpdateQuotation(
    $input: UpdateQuotationInput!
    $condition: ModelQuotationConditionInput
  ) {
    updateQuotation(input: $input, condition: $condition) {
      id
      name
      email
      organization
      description
      file
      category
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteQuotation = /* GraphQL */ `
  mutation DeleteQuotation(
    $input: DeleteQuotationInput!
    $condition: ModelQuotationConditionInput
  ) {
    deleteQuotation(input: $input, condition: $condition) {
      id
      name
      email
      organization
      description
      file
      category
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createBlog = /* GraphQL */ `
  mutation CreateBlog(
    $input: CreateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    createBlog(input: $input, condition: $condition) {
      id
      title
      description
      body
      slug
      thumbnail
      tags
      meta_title
      meta_description
      meta_keywords
      isPublished
      ownerId
      owner {
        id
        name
        email
        company {
          id
          company_name
          company_tagline
          website_url
          email
          phone_no
          no_of_employee
          founded
          description
          logo
          location
          headquarter_location
          is_verifeid
          is_sponsored
          total_earning
          hourly_rate
          project_earnings
          services {
            name
            percentage
            __typename
          }
          social_media {
            facebook
            instagram
            twitter
            linkedin
            other
            __typename
          }
          ownerId
          owner {
            id
            name
            email
            company {
              id
              company_name
              company_tagline
              website_url
              email
              phone_no
              no_of_employee
              founded
              description
              logo
              location
              headquarter_location
              is_verifeid
              is_sponsored
              total_earning
              hourly_rate
              project_earnings
              ownerId
              createdAt
              status
              updatedAt
              __typename
            }
            email_verified
            status
            createdAt
            updatedAt
            userCompanyId
            __typename
          }
          reviews {
            items {
              id
              company_name
              company_locaion
              offered_service
              start_date
              end_date
              project_cost
              project_description
              status
              is_approved
              review
              review_description
              ownerId
              createdAt
              updatedAt
              iOCompanyReviewsId
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          status
          updatedAt
          __typename
        }
        email_verified
        status
        createdAt
        updatedAt
        userCompanyId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateBlog = /* GraphQL */ `
  mutation UpdateBlog(
    $input: UpdateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    updateBlog(input: $input, condition: $condition) {
      id
      title
      description
      body
      slug
      thumbnail
      tags
      meta_title
      meta_description
      meta_keywords
      isPublished
      ownerId
      owner {
        id
        name
        email
        company {
          id
          company_name
          company_tagline
          website_url
          email
          phone_no
          no_of_employee
          founded
          description
          logo
          location
          headquarter_location
          is_verifeid
          is_sponsored
          total_earning
          hourly_rate
          project_earnings
          services {
            name
            percentage
            __typename
          }
          social_media {
            facebook
            instagram
            twitter
            linkedin
            other
            __typename
          }
          ownerId
          owner {
            id
            name
            email
            company {
              id
              company_name
              company_tagline
              website_url
              email
              phone_no
              no_of_employee
              founded
              description
              logo
              location
              headquarter_location
              is_verifeid
              is_sponsored
              total_earning
              hourly_rate
              project_earnings
              ownerId
              createdAt
              status
              updatedAt
              __typename
            }
            email_verified
            status
            createdAt
            updatedAt
            userCompanyId
            __typename
          }
          reviews {
            items {
              id
              company_name
              company_locaion
              offered_service
              start_date
              end_date
              project_cost
              project_description
              status
              is_approved
              review
              review_description
              ownerId
              createdAt
              updatedAt
              iOCompanyReviewsId
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          status
          updatedAt
          __typename
        }
        email_verified
        status
        createdAt
        updatedAt
        userCompanyId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteBlog = /* GraphQL */ `
  mutation DeleteBlog(
    $input: DeleteBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    deleteBlog(input: $input, condition: $condition) {
      id
      title
      description
      body
      slug
      thumbnail
      tags
      meta_title
      meta_description
      meta_keywords
      isPublished
      ownerId
      owner {
        id
        name
        email
        company {
          id
          company_name
          company_tagline
          website_url
          email
          phone_no
          no_of_employee
          founded
          description
          logo
          location
          headquarter_location
          is_verifeid
          is_sponsored
          total_earning
          hourly_rate
          project_earnings
          services {
            name
            percentage
            __typename
          }
          social_media {
            facebook
            instagram
            twitter
            linkedin
            other
            __typename
          }
          ownerId
          owner {
            id
            name
            email
            company {
              id
              company_name
              company_tagline
              website_url
              email
              phone_no
              no_of_employee
              founded
              description
              logo
              location
              headquarter_location
              is_verifeid
              is_sponsored
              total_earning
              hourly_rate
              project_earnings
              ownerId
              createdAt
              status
              updatedAt
              __typename
            }
            email_verified
            status
            createdAt
            updatedAt
            userCompanyId
            __typename
          }
          reviews {
            items {
              id
              company_name
              company_locaion
              offered_service
              start_date
              end_date
              project_cost
              project_description
              status
              is_approved
              review
              review_description
              ownerId
              createdAt
              updatedAt
              iOCompanyReviewsId
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          status
          updatedAt
          __typename
        }
        email_verified
        status
        createdAt
        updatedAt
        userCompanyId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createContactUs = /* GraphQL */ `
  mutation CreateContactUs(
    $input: CreateContactUsInput!
    $condition: ModelContactUsConditionInput
  ) {
    createContactUs(input: $input, condition: $condition) {
      id
      first_name
      last_name
      email
      phone_number
      website_url
      description
      file
      category
      company_name
      skypeid
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateContactUs = /* GraphQL */ `
  mutation UpdateContactUs(
    $input: UpdateContactUsInput!
    $condition: ModelContactUsConditionInput
  ) {
    updateContactUs(input: $input, condition: $condition) {
      id
      first_name
      last_name
      email
      phone_number
      website_url
      description
      file
      category
      company_name
      skypeid
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteContactUs = /* GraphQL */ `
  mutation DeleteContactUs(
    $input: DeleteContactUsInput!
    $condition: ModelContactUsConditionInput
  ) {
    deleteContactUs(input: $input, condition: $condition) {
      id
      first_name
      last_name
      email
      phone_number
      website_url
      description
      file
      category
      company_name
      skypeid
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createReview = /* GraphQL */ `
  mutation CreateReview(
    $input: CreateReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    createReview(input: $input, condition: $condition) {
      id
      company_name
      company_locaion
      offered_service
      start_date
      end_date
      project_cost
      project_description
      status
      is_approved
      review
      rating {
        quality_work
        cost
        response_time
        overall_experience
        __typename
      }
      review_description
      ownerId
      owner {
        id
        name
        email
        company {
          id
          company_name
          company_tagline
          website_url
          email
          phone_no
          no_of_employee
          founded
          description
          logo
          location
          headquarter_location
          is_verifeid
          is_sponsored
          total_earning
          hourly_rate
          project_earnings
          services {
            name
            percentage
            __typename
          }
          social_media {
            facebook
            instagram
            twitter
            linkedin
            other
            __typename
          }
          ownerId
          owner {
            id
            name
            email
            company {
              id
              company_name
              company_tagline
              website_url
              email
              phone_no
              no_of_employee
              founded
              description
              logo
              location
              headquarter_location
              is_verifeid
              is_sponsored
              total_earning
              hourly_rate
              project_earnings
              ownerId
              createdAt
              status
              updatedAt
              __typename
            }
            email_verified
            status
            createdAt
            updatedAt
            userCompanyId
            __typename
          }
          reviews {
            items {
              id
              company_name
              company_locaion
              offered_service
              start_date
              end_date
              project_cost
              project_description
              status
              is_approved
              review
              review_description
              ownerId
              createdAt
              updatedAt
              iOCompanyReviewsId
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          status
          updatedAt
          __typename
        }
        email_verified
        status
        createdAt
        updatedAt
        userCompanyId
        __typename
      }
      IOCompany {
        id
        company_name
        company_tagline
        website_url
        email
        phone_no
        no_of_employee
        founded
        description
        logo
        location
        headquarter_location
        is_verifeid
        is_sponsored
        total_earning
        hourly_rate
        project_earnings
        services {
          name
          percentage
          __typename
        }
        social_media {
          facebook
          instagram
          twitter
          linkedin
          other
          __typename
        }
        ownerId
        owner {
          id
          name
          email
          company {
            id
            company_name
            company_tagline
            website_url
            email
            phone_no
            no_of_employee
            founded
            description
            logo
            location
            headquarter_location
            is_verifeid
            is_sponsored
            total_earning
            hourly_rate
            project_earnings
            services {
              name
              percentage
              __typename
            }
            social_media {
              facebook
              instagram
              twitter
              linkedin
              other
              __typename
            }
            ownerId
            owner {
              id
              name
              email
              email_verified
              status
              createdAt
              updatedAt
              userCompanyId
              __typename
            }
            reviews {
              nextToken
              __typename
            }
            createdAt
            status
            updatedAt
            __typename
          }
          email_verified
          status
          createdAt
          updatedAt
          userCompanyId
          __typename
        }
        reviews {
          items {
            id
            company_name
            company_locaion
            offered_service
            start_date
            end_date
            project_cost
            project_description
            status
            is_approved
            review
            rating {
              quality_work
              cost
              response_time
              overall_experience
              __typename
            }
            review_description
            ownerId
            owner {
              id
              name
              email
              email_verified
              status
              createdAt
              updatedAt
              userCompanyId
              __typename
            }
            IOCompany {
              id
              company_name
              company_tagline
              website_url
              email
              phone_no
              no_of_employee
              founded
              description
              logo
              location
              headquarter_location
              is_verifeid
              is_sponsored
              total_earning
              hourly_rate
              project_earnings
              ownerId
              createdAt
              status
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            iOCompanyReviewsId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        status
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      iOCompanyReviewsId
      __typename
    }
  }
`;
export const updateReview = /* GraphQL */ `
  mutation UpdateReview(
    $input: UpdateReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    updateReview(input: $input, condition: $condition) {
      id
      company_name
      company_locaion
      offered_service
      start_date
      end_date
      project_cost
      project_description
      status
      is_approved
      review
      rating {
        quality_work
        cost
        response_time
        overall_experience
        __typename
      }
      review_description
      ownerId
      owner {
        id
        name
        email
        company {
          id
          company_name
          company_tagline
          website_url
          email
          phone_no
          no_of_employee
          founded
          description
          logo
          location
          headquarter_location
          is_verifeid
          is_sponsored
          total_earning
          hourly_rate
          project_earnings
          services {
            name
            percentage
            __typename
          }
          social_media {
            facebook
            instagram
            twitter
            linkedin
            other
            __typename
          }
          ownerId
          owner {
            id
            name
            email
            company {
              id
              company_name
              company_tagline
              website_url
              email
              phone_no
              no_of_employee
              founded
              description
              logo
              location
              headquarter_location
              is_verifeid
              is_sponsored
              total_earning
              hourly_rate
              project_earnings
              ownerId
              createdAt
              status
              updatedAt
              __typename
            }
            email_verified
            status
            createdAt
            updatedAt
            userCompanyId
            __typename
          }
          reviews {
            items {
              id
              company_name
              company_locaion
              offered_service
              start_date
              end_date
              project_cost
              project_description
              status
              is_approved
              review
              review_description
              ownerId
              createdAt
              updatedAt
              iOCompanyReviewsId
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          status
          updatedAt
          __typename
        }
        email_verified
        status
        createdAt
        updatedAt
        userCompanyId
        __typename
      }
      IOCompany {
        id
        company_name
        company_tagline
        website_url
        email
        phone_no
        no_of_employee
        founded
        description
        logo
        location
        headquarter_location
        is_verifeid
        is_sponsored
        total_earning
        hourly_rate
        project_earnings
        services {
          name
          percentage
          __typename
        }
        social_media {
          facebook
          instagram
          twitter
          linkedin
          other
          __typename
        }
        ownerId
        owner {
          id
          name
          email
          company {
            id
            company_name
            company_tagline
            website_url
            email
            phone_no
            no_of_employee
            founded
            description
            logo
            location
            headquarter_location
            is_verifeid
            is_sponsored
            total_earning
            hourly_rate
            project_earnings
            services {
              name
              percentage
              __typename
            }
            social_media {
              facebook
              instagram
              twitter
              linkedin
              other
              __typename
            }
            ownerId
            owner {
              id
              name
              email
              email_verified
              status
              createdAt
              updatedAt
              userCompanyId
              __typename
            }
            reviews {
              nextToken
              __typename
            }
            createdAt
            status
            updatedAt
            __typename
          }
          email_verified
          status
          createdAt
          updatedAt
          userCompanyId
          __typename
        }
        reviews {
          items {
            id
            company_name
            company_locaion
            offered_service
            start_date
            end_date
            project_cost
            project_description
            status
            is_approved
            review
            rating {
              quality_work
              cost
              response_time
              overall_experience
              __typename
            }
            review_description
            ownerId
            owner {
              id
              name
              email
              email_verified
              status
              createdAt
              updatedAt
              userCompanyId
              __typename
            }
            IOCompany {
              id
              company_name
              company_tagline
              website_url
              email
              phone_no
              no_of_employee
              founded
              description
              logo
              location
              headquarter_location
              is_verifeid
              is_sponsored
              total_earning
              hourly_rate
              project_earnings
              ownerId
              createdAt
              status
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            iOCompanyReviewsId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        status
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      iOCompanyReviewsId
      __typename
    }
  }
`;
export const deleteReview = /* GraphQL */ `
  mutation DeleteReview(
    $input: DeleteReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    deleteReview(input: $input, condition: $condition) {
      id
      company_name
      company_locaion
      offered_service
      start_date
      end_date
      project_cost
      project_description
      status
      is_approved
      review
      rating {
        quality_work
        cost
        response_time
        overall_experience
        __typename
      }
      review_description
      ownerId
      owner {
        id
        name
        email
        company {
          id
          company_name
          company_tagline
          website_url
          email
          phone_no
          no_of_employee
          founded
          description
          logo
          location
          headquarter_location
          is_verifeid
          is_sponsored
          total_earning
          hourly_rate
          project_earnings
          services {
            name
            percentage
            __typename
          }
          social_media {
            facebook
            instagram
            twitter
            linkedin
            other
            __typename
          }
          ownerId
          owner {
            id
            name
            email
            company {
              id
              company_name
              company_tagline
              website_url
              email
              phone_no
              no_of_employee
              founded
              description
              logo
              location
              headquarter_location
              is_verifeid
              is_sponsored
              total_earning
              hourly_rate
              project_earnings
              ownerId
              createdAt
              status
              updatedAt
              __typename
            }
            email_verified
            status
            createdAt
            updatedAt
            userCompanyId
            __typename
          }
          reviews {
            items {
              id
              company_name
              company_locaion
              offered_service
              start_date
              end_date
              project_cost
              project_description
              status
              is_approved
              review
              review_description
              ownerId
              createdAt
              updatedAt
              iOCompanyReviewsId
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          status
          updatedAt
          __typename
        }
        email_verified
        status
        createdAt
        updatedAt
        userCompanyId
        __typename
      }
      IOCompany {
        id
        company_name
        company_tagline
        website_url
        email
        phone_no
        no_of_employee
        founded
        description
        logo
        location
        headquarter_location
        is_verifeid
        is_sponsored
        total_earning
        hourly_rate
        project_earnings
        services {
          name
          percentage
          __typename
        }
        social_media {
          facebook
          instagram
          twitter
          linkedin
          other
          __typename
        }
        ownerId
        owner {
          id
          name
          email
          company {
            id
            company_name
            company_tagline
            website_url
            email
            phone_no
            no_of_employee
            founded
            description
            logo
            location
            headquarter_location
            is_verifeid
            is_sponsored
            total_earning
            hourly_rate
            project_earnings
            services {
              name
              percentage
              __typename
            }
            social_media {
              facebook
              instagram
              twitter
              linkedin
              other
              __typename
            }
            ownerId
            owner {
              id
              name
              email
              email_verified
              status
              createdAt
              updatedAt
              userCompanyId
              __typename
            }
            reviews {
              nextToken
              __typename
            }
            createdAt
            status
            updatedAt
            __typename
          }
          email_verified
          status
          createdAt
          updatedAt
          userCompanyId
          __typename
        }
        reviews {
          items {
            id
            company_name
            company_locaion
            offered_service
            start_date
            end_date
            project_cost
            project_description
            status
            is_approved
            review
            rating {
              quality_work
              cost
              response_time
              overall_experience
              __typename
            }
            review_description
            ownerId
            owner {
              id
              name
              email
              email_verified
              status
              createdAt
              updatedAt
              userCompanyId
              __typename
            }
            IOCompany {
              id
              company_name
              company_tagline
              website_url
              email
              phone_no
              no_of_employee
              founded
              description
              logo
              location
              headquarter_location
              is_verifeid
              is_sponsored
              total_earning
              hourly_rate
              project_earnings
              ownerId
              createdAt
              status
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            iOCompanyReviewsId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        status
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      iOCompanyReviewsId
      __typename
    }
  }
`;
export const createIOCompany = /* GraphQL */ `
  mutation CreateIOCompany(
    $input: CreateIOCompanyInput!
    $condition: ModelIOCompanyConditionInput
  ) {
    createIOCompany(input: $input, condition: $condition) {
      id
      company_name
      company_tagline
      website_url
      email
      phone_no
      no_of_employee
      founded
      description
      logo
      location
      headquarter_location
      is_verifeid
      is_sponsored
      total_earning
      hourly_rate
      project_earnings
      services {
        name
        percentage
        __typename
      }
      social_media {
        facebook
        instagram
        twitter
        linkedin
        other
        __typename
      }
      ownerId
      owner {
        id
        name
        email
        company {
          id
          company_name
          company_tagline
          website_url
          email
          phone_no
          no_of_employee
          founded
          description
          logo
          location
          headquarter_location
          is_verifeid
          is_sponsored
          total_earning
          hourly_rate
          project_earnings
          services {
            name
            percentage
            __typename
          }
          social_media {
            facebook
            instagram
            twitter
            linkedin
            other
            __typename
          }
          ownerId
          owner {
            id
            name
            email
            company {
              id
              company_name
              company_tagline
              website_url
              email
              phone_no
              no_of_employee
              founded
              description
              logo
              location
              headquarter_location
              is_verifeid
              is_sponsored
              total_earning
              hourly_rate
              project_earnings
              ownerId
              createdAt
              status
              updatedAt
              __typename
            }
            email_verified
            status
            createdAt
            updatedAt
            userCompanyId
            __typename
          }
          reviews {
            items {
              id
              company_name
              company_locaion
              offered_service
              start_date
              end_date
              project_cost
              project_description
              status
              is_approved
              review
              review_description
              ownerId
              createdAt
              updatedAt
              iOCompanyReviewsId
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          status
          updatedAt
          __typename
        }
        email_verified
        status
        createdAt
        updatedAt
        userCompanyId
        __typename
      }
      reviews {
        items {
          id
          company_name
          company_locaion
          offered_service
          start_date
          end_date
          project_cost
          project_description
          status
          is_approved
          review
          rating {
            quality_work
            cost
            response_time
            overall_experience
            __typename
          }
          review_description
          ownerId
          owner {
            id
            name
            email
            company {
              id
              company_name
              company_tagline
              website_url
              email
              phone_no
              no_of_employee
              founded
              description
              logo
              location
              headquarter_location
              is_verifeid
              is_sponsored
              total_earning
              hourly_rate
              project_earnings
              ownerId
              createdAt
              status
              updatedAt
              __typename
            }
            email_verified
            status
            createdAt
            updatedAt
            userCompanyId
            __typename
          }
          IOCompany {
            id
            company_name
            company_tagline
            website_url
            email
            phone_no
            no_of_employee
            founded
            description
            logo
            location
            headquarter_location
            is_verifeid
            is_sponsored
            total_earning
            hourly_rate
            project_earnings
            services {
              name
              percentage
              __typename
            }
            social_media {
              facebook
              instagram
              twitter
              linkedin
              other
              __typename
            }
            ownerId
            owner {
              id
              name
              email
              email_verified
              status
              createdAt
              updatedAt
              userCompanyId
              __typename
            }
            reviews {
              nextToken
              __typename
            }
            createdAt
            status
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          iOCompanyReviewsId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      status
      updatedAt
      __typename
    }
  }
`;
export const updateIOCompany = /* GraphQL */ `
  mutation UpdateIOCompany(
    $input: UpdateIOCompanyInput!
    $condition: ModelIOCompanyConditionInput
  ) {
    updateIOCompany(input: $input, condition: $condition) {
      id
      company_name
      company_tagline
      website_url
      email
      phone_no
      no_of_employee
      founded
      description
      logo
      location
      headquarter_location
      is_verifeid
      is_sponsored
      total_earning
      hourly_rate
      project_earnings
      services {
        name
        percentage
        __typename
      }
      social_media {
        facebook
        instagram
        twitter
        linkedin
        other
        __typename
      }
      ownerId
      owner {
        id
        name
        email
        company {
          id
          company_name
          company_tagline
          website_url
          email
          phone_no
          no_of_employee
          founded
          description
          logo
          location
          headquarter_location
          is_verifeid
          is_sponsored
          total_earning
          hourly_rate
          project_earnings
          services {
            name
            percentage
            __typename
          }
          social_media {
            facebook
            instagram
            twitter
            linkedin
            other
            __typename
          }
          ownerId
          owner {
            id
            name
            email
            company {
              id
              company_name
              company_tagline
              website_url
              email
              phone_no
              no_of_employee
              founded
              description
              logo
              location
              headquarter_location
              is_verifeid
              is_sponsored
              total_earning
              hourly_rate
              project_earnings
              ownerId
              createdAt
              status
              updatedAt
              __typename
            }
            email_verified
            status
            createdAt
            updatedAt
            userCompanyId
            __typename
          }
          reviews {
            items {
              id
              company_name
              company_locaion
              offered_service
              start_date
              end_date
              project_cost
              project_description
              status
              is_approved
              review
              review_description
              ownerId
              createdAt
              updatedAt
              iOCompanyReviewsId
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          status
          updatedAt
          __typename
        }
        email_verified
        status
        createdAt
        updatedAt
        userCompanyId
        __typename
      }
      reviews {
        items {
          id
          company_name
          company_locaion
          offered_service
          start_date
          end_date
          project_cost
          project_description
          status
          is_approved
          review
          rating {
            quality_work
            cost
            response_time
            overall_experience
            __typename
          }
          review_description
          ownerId
          owner {
            id
            name
            email
            company {
              id
              company_name
              company_tagline
              website_url
              email
              phone_no
              no_of_employee
              founded
              description
              logo
              location
              headquarter_location
              is_verifeid
              is_sponsored
              total_earning
              hourly_rate
              project_earnings
              ownerId
              createdAt
              status
              updatedAt
              __typename
            }
            email_verified
            status
            createdAt
            updatedAt
            userCompanyId
            __typename
          }
          IOCompany {
            id
            company_name
            company_tagline
            website_url
            email
            phone_no
            no_of_employee
            founded
            description
            logo
            location
            headquarter_location
            is_verifeid
            is_sponsored
            total_earning
            hourly_rate
            project_earnings
            services {
              name
              percentage
              __typename
            }
            social_media {
              facebook
              instagram
              twitter
              linkedin
              other
              __typename
            }
            ownerId
            owner {
              id
              name
              email
              email_verified
              status
              createdAt
              updatedAt
              userCompanyId
              __typename
            }
            reviews {
              nextToken
              __typename
            }
            createdAt
            status
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          iOCompanyReviewsId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      status
      updatedAt
      __typename
    }
  }
`;
export const deleteIOCompany = /* GraphQL */ `
  mutation DeleteIOCompany(
    $input: DeleteIOCompanyInput!
    $condition: ModelIOCompanyConditionInput
  ) {
    deleteIOCompany(input: $input, condition: $condition) {
      id
      company_name
      company_tagline
      website_url
      email
      phone_no
      no_of_employee
      founded
      description
      logo
      location
      headquarter_location
      is_verifeid
      is_sponsored
      total_earning
      hourly_rate
      project_earnings
      services {
        name
        percentage
        __typename
      }
      social_media {
        facebook
        instagram
        twitter
        linkedin
        other
        __typename
      }
      ownerId
      owner {
        id
        name
        email
        company {
          id
          company_name
          company_tagline
          website_url
          email
          phone_no
          no_of_employee
          founded
          description
          logo
          location
          headquarter_location
          is_verifeid
          is_sponsored
          total_earning
          hourly_rate
          project_earnings
          services {
            name
            percentage
            __typename
          }
          social_media {
            facebook
            instagram
            twitter
            linkedin
            other
            __typename
          }
          ownerId
          owner {
            id
            name
            email
            company {
              id
              company_name
              company_tagline
              website_url
              email
              phone_no
              no_of_employee
              founded
              description
              logo
              location
              headquarter_location
              is_verifeid
              is_sponsored
              total_earning
              hourly_rate
              project_earnings
              ownerId
              createdAt
              status
              updatedAt
              __typename
            }
            email_verified
            status
            createdAt
            updatedAt
            userCompanyId
            __typename
          }
          reviews {
            items {
              id
              company_name
              company_locaion
              offered_service
              start_date
              end_date
              project_cost
              project_description
              status
              is_approved
              review
              review_description
              ownerId
              createdAt
              updatedAt
              iOCompanyReviewsId
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          status
          updatedAt
          __typename
        }
        email_verified
        status
        createdAt
        updatedAt
        userCompanyId
        __typename
      }
      reviews {
        items {
          id
          company_name
          company_locaion
          offered_service
          start_date
          end_date
          project_cost
          project_description
          status
          is_approved
          review
          rating {
            quality_work
            cost
            response_time
            overall_experience
            __typename
          }
          review_description
          ownerId
          owner {
            id
            name
            email
            company {
              id
              company_name
              company_tagline
              website_url
              email
              phone_no
              no_of_employee
              founded
              description
              logo
              location
              headquarter_location
              is_verifeid
              is_sponsored
              total_earning
              hourly_rate
              project_earnings
              ownerId
              createdAt
              status
              updatedAt
              __typename
            }
            email_verified
            status
            createdAt
            updatedAt
            userCompanyId
            __typename
          }
          IOCompany {
            id
            company_name
            company_tagline
            website_url
            email
            phone_no
            no_of_employee
            founded
            description
            logo
            location
            headquarter_location
            is_verifeid
            is_sponsored
            total_earning
            hourly_rate
            project_earnings
            services {
              name
              percentage
              __typename
            }
            social_media {
              facebook
              instagram
              twitter
              linkedin
              other
              __typename
            }
            ownerId
            owner {
              id
              name
              email
              email_verified
              status
              createdAt
              updatedAt
              userCompanyId
              __typename
            }
            reviews {
              nextToken
              __typename
            }
            createdAt
            status
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          iOCompanyReviewsId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      status
      updatedAt
      __typename
    }
  }
`;
